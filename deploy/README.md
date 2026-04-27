# Déploiement — kamatedrissa.com

Pipeline CI/CD : `git push main` → GitHub Actions build → SCP du `dist/` sur le VPS → reload nginx.

## 1. Setup VPS (à faire une seule fois)

### Créer le dossier cible et donner les droits

```bash
sudo mkdir -p /var/www/kamatedrissa.com
sudo chown -R $USER:www-data /var/www/kamatedrissa.com
sudo chmod -R 755 /var/www/kamatedrissa.com
```

### Installer la config nginx

```bash
# Copier la config depuis le repo (ou la coller manuellement)
sudo cp deploy/nginx.conf /etc/nginx/sites-available/kamatedrissa.com
sudo ln -s /etc/nginx/sites-available/kamatedrissa.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Autoriser le user de déploiement à reload nginx sans mot de passe

Le step "Reload nginx" du workflow utilise `sudo`. Il faut autoriser ce sudo précis sans mot de passe sinon le job va planter.

```bash
sudo visudo -f /etc/sudoers.d/deploy-nginx
```

Coller (remplacer `<USER>` par le user SSH du déploiement) :

```
<USER> ALL=(ALL) NOPASSWD: /usr/sbin/nginx -t, /bin/systemctl reload nginx
```

## 2. DNS — Namecheap

Dashboard Namecheap → `Domain List` → bouton **Manage** sur `kamatedrissa.com` → onglet **Advanced DNS**.

Supprimer les records par défaut (CNAME `www → parkingpage`, URL Redirect, etc.) puis créer :

| Type | Host | Value           | TTL       |
|------|------|-----------------|-----------|
| A    | `@`  | `<IP DU VPS>`   | Automatic |
| A    | `www`| `<IP DU VPS>`   | Automatic |

Propagation : 5 min à 1 h. Tu peux vérifier avec :

```bash
dig kamatedrissa.com +short
dig www.kamatedrissa.com +short
```

Les deux doivent renvoyer ton IP VPS.

## 3. SSL — Let's Encrypt

Une fois les DNS propagés (sinon certbot va échouer sur le challenge HTTP) :

```bash
sudo certbot --nginx -d kamatedrissa.com -d www.kamatedrissa.com
```

Certbot va :
- Vérifier les DNS via challenge HTTP-01
- Récupérer le certificat
- Modifier `/etc/nginx/sites-available/kamatedrissa.com` pour ajouter le bloc 443 + le redirect 80 → 443
- Configurer le renouvellement automatique (cron + systemd timer)

Vérifier le renouvellement :

```bash
sudo certbot renew --dry-run
```

## 4. Secrets GitHub

Repo `kamate-drissa-epitech/portefolio` → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

Ajouter ces 3 secrets :

| Nom               | Valeur                                          |
|-------------------|-------------------------------------------------|
| `VPS_HOST`        | IP publique ou hostname du VPS                  |
| `VPS_USER`        | User SSH (ex: `deploy` ou `ubuntu`)             |
| `SSH_PRIVATE_KEY` | Contenu COMPLET de la clé privée (avec headers) |

### Générer la paire de clés SSH dédiée au déploiement

Sur ta machine locale (jamais sur le VPS) :

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/kamatedrissa_deploy -N ""
```

- Le contenu de `kamatedrissa_deploy` (clé privée) → secret `SSH_PRIVATE_KEY` sur GitHub
- Le contenu de `kamatedrissa_deploy.pub` (clé publique) → à ajouter sur le VPS dans `~/.ssh/authorized_keys` du user de déploiement :

```bash
# Sur le VPS
echo "<contenu de kamatedrissa_deploy.pub>" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Tester la connexion depuis ta machine

```bash
ssh -i ~/.ssh/kamatedrissa_deploy <USER>@<VPS_HOST>
```

Si ça marche sans demander de mot de passe → GitHub Actions pourra aussi.

## 5. Premier déploiement

```bash
git add .
git commit -m "ci: setup deploy pipeline"
git push origin main
```

Va sur GitHub → onglet **Actions** → tu vois `Deploy Portfolio` qui tourne. Si vert → ouvre `https://kamatedrissa.com` 🎉

## Troubleshooting

| Symptôme                                | Cause probable                                                | Fix                                                              |
|-----------------------------------------|---------------------------------------------------------------|------------------------------------------------------------------|
| `Permission denied (publickey)`         | Clé SSH absente ou mauvaise dans `authorized_keys` du VPS    | Re-vérifier la clé publique côté VPS, droits 600 sur le fichier |
| `404 Not Found` sur `/projects` direct  | nginx sans `try_files ... /index.html`                       | Vérifier que la config dans `/etc/nginx/sites-available/...` correspond à `deploy/nginx.conf` |
| Certbot échoue                          | DNS pas encore propagés                                       | Attendre + re-tester avec `dig`                                  |
| Vieux contenu après deploy              | Cache navigateur ou `index.html` mis en cache par un CDN     | Hard refresh (Ctrl+Shift+R), vérifier les headers `Cache-Control` |
| `nginx -t` fail dans le step "Reload"   | Config nginx invalide                                         | SSH sur le VPS, faire `sudo nginx -t`, lire l'erreur             |
