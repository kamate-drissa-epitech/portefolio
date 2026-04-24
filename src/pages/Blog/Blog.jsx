import "./Blog.css";

const UPCOMING = [
    {
        title: "Bien débuter avec React Router 7",
        description:
            "Tour d’horizon des nouveautés, de la configuration et des bonnes pratiques de routing moderne.",
        tag: "React",
        date: "À venir",
    },
    {
        title: "Comprendre le System Design pas à pas",
        description:
            "Les concepts clés (scalabilité, cache, load balancing) illustrés par des cas concrets.",
        tag: "Architecture",
        date: "À venir",
    },
    {
        title: "Laravel & Django : quand choisir quoi ?",
        description:
            "Comparaison honnête de deux frameworks back-end que j’utilise au quotidien.",
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
                    Je partagerai bientôt ici des notes, tutoriels et retours
                    d’expérience autour du développement web et du system design.
                </p>
                <div className="coming-soon-pill">Bientôt disponible</div>
            </header>

            <section className="blog-preview">
                <h2 className="preview-title">Dans les tuyaux</h2>
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
