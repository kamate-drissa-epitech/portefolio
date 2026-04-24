import "./Projects.css";

const PROJECTS = [
    {
        title: "Gestionnaire de Tickets de Bus",
        description:
            "Application web permettant d’acheter des tickets de bus et de générer des PDF. Gestion des utilisateurs, paiements et historiques.",
        image: "/drissa.kamate@epitech.eu.jpg",
        stack: ["React", "Node.js", "PostgreSQL", "Express"],
        live: "#",
        code: "#",
        status: "En production",
    },
    {
        title: "Portfolio personnel",
        description:
            "Ce portfolio développé en React — design épuré inspiré d’ashishps.com, thème clair/sombre, entièrement responsive.",
        image: "/drissa.kamate@epitech.eu.jpg",
        stack: ["React", "Vite", "React Router", "CSS"],
        live: "#",
        code: "https://github.com/kamate-drissa-epitech",
        status: "Actif",
    },
    {
        title: "System Design — Notes",
        description:
            "Recueil de notes, schémas et cas d’étude autour du system design : scalabilité, caching, bases de données, architectures distribuées.",
        image: "/drissa.kamate@epitech.eu.jpg",
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
                    Une sélection de ce que j’ai conçu, construit ou expérimenté —
                    du prototype rapide au projet abouti.
                </p>
            </header>

            <div className="projects-grid">
                {PROJECTS.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-image-wrap">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <span className={`status-badge ${project.status.toLowerCase().replace(/\s/g, "-")}`}>
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

                        <div className="project-links">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Voir en ligne →
                            </a>
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Code source →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
