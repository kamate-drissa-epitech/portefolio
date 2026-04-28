import "./Projects.css";

const BusIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M8 6v6" />
        <path d="M15 6v6" />
        <path d="M2 12h19.6" />
        <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
        <circle cx="7" cy="18" r="2" />
        <path d="M9 18h5" />
        <circle cx="16" cy="18" r="2" />
    </svg>
);

const CodeIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
);

const SystemIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="3" width="8" height="6" rx="1" />
        <rect x="14" y="3" width="8" height="6" rx="1" />
        <rect x="2" y="15" width="8" height="6" rx="1" />
        <rect x="14" y="15" width="8" height="6" rx="1" />
        <path d="M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
        <path d="M12 14v1" />
    </svg>
);

const EducationIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 10v6" />
        <path d="M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const BuildingIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <line x1="8" y1="7" x2="10" y2="7" />
        <line x1="14" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="10" y2="11" />
        <line x1="14" y1="11" x2="16" y2="11" />
        <path d="M10 21v-4h4v4" />
    </svg>
);

const VideoIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M16 10l6-3v10l-6-3z" />
    </svg>
);

const DashboardIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
);

const PROJECTS = [
    {
        title: "Plateforme d’affectation — Ministère de l’Éducation Nationale",
        description:
            "Système national de mutation des enseignants. Matching pair-à-pair : un enseignant publie sa demande, un autre intéressé propose un échange, le ministère valide. De quoi fluidifier un processus historiquement très administratif.",
        Icon: EducationIcon,
        gradient: "linear-gradient(135deg, #1e3a8a 0%, #4338ca 100%)",
        stack: ["Laravel", "PHP", "MySQL", "Blade"],
        live: "#",
        code: "#",
        status: "En production",
    },
    {
        title: "Intranet — Gestion d’établissement",
        description:
            "Plateforme de gestion interne pour un établissement scolaire. Centralise les utilisateurs et leurs rôles, les modules administratifs et le suivi quotidien des opérations — un outil unique qui remplace une dizaine de tableurs Excel éparpillés.",
        Icon: DashboardIcon,
        gradient: "linear-gradient(135deg, #64748b 0%, #1e293b 100%)",
        stack: ["Laravel", "PHP", "MySQL", "Blade"],
        live: "#",
        code: "#",
        status: "En production",
    },
    {
        title: "Site vitrine — AMC",
        description:
            "Site corporate présentant l’entreprise AMC, ses services et ses moyens de contact (WhatsApp, email, formulaire). Pensé pour transformer une visite en prise de contact en un seul clic.",
        Icon: BuildingIcon,
        gradient: "linear-gradient(135deg, #f97316 0%, #d97706 100%)",
        stack: ["React", "TailwindCSS", "Express"],
        live: "https://app.kamatedrissa.com",
        code: "#",
        status: "En production",
    },
    // {
    //     title: "Gestionnaire de Tickets de Bus",
    //     description:
    //         "Réserver et imprimer son ticket en quelques clics, sans passer par un guichet. PDF générés à la volée, paiement intégré, historique consultable côté utilisateur.",
    //     Icon: BusIcon,
    //     gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
    //     stack: ["React", "Node.js", "PostgreSQL", "Express"],
    //     live: "#",
    //     code: "#",
    //     status: "En production",
    // },
    {
        title: "Plateforme de streaming vidéo",
        description:
            "Plateforme de diffusion vidéo en cours de construction. Architecture pensée pour la performance : transcoding à la volée, lecteur fluide même sur connexion limitée, gestion des plans utilisateurs.",
        Icon: VideoIcon,
        gradient: "linear-gradient(135deg, #ef4444 0%, #ec4899 100%)",
        stack: ["React", "Node.js", "FFmpeg", "PostgreSQL"],
        live: "#",
        code: "#",
        status: "En cours",
    },
    {
        title: "Portfolio personnel",
        description:
            "Le site sur lequel tu te trouves. Construit en React avec un soin particulier sur la typographie, le mode sombre et les transitions — pensé pour rester lisible et rapide.",
        Icon: CodeIcon,
        gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
        stack: ["React", "Vite", "React Router", "CSS"],
        live: "https://kamatedrissa.com",
        code: "https://github.com/kamate-drissa-epitech",
        status: "Actif",
    },
    {
        title: "System Design — Notes",
        description:
            "Mes notes vivantes sur la conception de systèmes à l’échelle : ce que j’apprends en lisant, en construisant, et — surtout — en cassant des choses.",
        Icon: SystemIcon,
        gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
        stack: ["Markdown", "Mermaid", "Docs"],
        live: "#",
        code: "#",
        status: "En cours",
    },
];

export function Projects() {
    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>Projets</h1>
                <p>
                    Quelques-uns des projets que j’ai construits — en production
                    chez des clients, en cours, ou en exploration personnelle.
                </p>
            </header>

            <div className="projects-grid">
                {PROJECTS.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div
                            className="project-visual"
                            style={{ background: project.gradient }}
                        >
                            <div className="project-visual-icon">
                                <project.Icon />
                            </div>
                            <span
                                className={`status-badge ${project.status
                                    .toLowerCase()
                                    .replace(/\s/g, "-")}`}
                            >
                                {project.status}
                            </span>
                        </div>

                        <div className="project-body">
                            <h3>{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="tech-stack">
                                {project.stack.map((tech) => (
                                    <span className="tech-tag" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {!(project.live === '#' && project.code === '#') && (
                            <div className="project-links">
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    Voir en ligne →
                                </a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer">
                                    Code source →
                                </a>
                            </div>
                            )
                        }
                    </article>
                ))}
            </div>
        </div>
    );
}
