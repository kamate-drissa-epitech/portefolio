import "./Blog.css";

const UPCOMING = [
    {
        title: "React Router 7 : ce qui a changé",
        description:
            "Le routing moderne expliqué simplement, avec les pièges à éviter quand on migre depuis la v6.",
        tag: "React",
        date: "À venir",
    },
    {
        title: "System Design pas à pas",
        description:
            "Scalabilité, cache, load balancing : les concepts clés démystifiés à travers des cas concrets que tu peux vraiment construire.",
        tag: "Architecture",
        date: "À venir",
    },
    {
        title: "Laravel vs Django : mon retour honnête",
        description:
            "Deux frameworks que j’utilise au quotidien — quand l’un brille, quand l’autre prend le relais. Sans dogme.",
        tag: "Back-end",
        date: "À venir",
    },
];

export function Blog() {
    return (
        <div className="blog-page">
            <header className="blog-header">
                <h1>Blog</h1>
                <p>
                    Mes lectures, mes essais et mes erreurs — celles qui m’ont
                    vraiment fait progresser. Pas de remplissage, juste ce qui
                    vaut la peine d’être partagé.
                </p>
                <div className="coming-soon-pill">Bientôt disponible</div>
            </header>

            <section className="blog-preview">
                <h2 className="preview-title">Prochains articles</h2>
                <div className="blog-list">
                    {UPCOMING.map((post) => (
                        <article className="blog-card" key={post.title}>
                            <div className="blog-meta">
                                <span className="blog-tag">{post.tag}</span>
                                <span className="blog-date">{post.date}</span>
                            </div>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
