import "./About.css";

const EXPERIENCES = [
    {
        role: "Développeur Full-Stack",
        company: "Projets personnels & freelance",
        period: "2023 — Aujourd’hui",
        description:
            "Conception et développement d’applications web et mobiles complètes : de la modélisation des données à l’interface utilisateur.",
    },
    {
        role: "Étudiant en informatique",
        company: "Epitech",
        period: "2022 — Aujourd’hui",
        description:
            "Formation intensive en programmation, algorithmique, système et gestion de projet via la pédagogie par projet.",
    },
];

const SKILLS = [
    {
        category: "Front-end",
        items: ["React.js", "Vue.js", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
    },
    {
        category: "Back-end",
        items: ["PHP / Laravel", "Python / Django", "Node.js", "REST API"],
    },
    {
        category: "Bases de données",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        category: "Outils",
        items: ["Git", "Docker", "Linux", "Figma", "VS Code"],
    },
];

const EDUCATION = [
    {
        school: "Epitech",
        degree: "Programme Grande École — Expert en technologies de l’information",
        period: "2022 — 2027",
    },
];

export function About() {
    return (
        <div className="about">
            <div className="about-container">
                <section className="about-hero">
                    <div className="about-photo-container">
                        <img src="/drissa.kamate@epitech.eu.jpg" alt="Kamate Drissa" />
                    </div>
                    <div className="path">
                        <p className="welcome">
                            Bienvenue, je suis{" "}
                            <span className="full-name">Kamate Drissa</span>
                        </p>
                        <p>
                            Je suis développeur web et mobile, passionné par la création
                            d’applications modernes et performantes. Je maîtrise aussi
                            bien le front-end (React.js, Vue.js) que le back-end
                            (PHP/Laravel, Python/Django, MySQL, MongoDB, PostgreSQL), ce
                            qui me permet de concevoir des solutions complètes et
                            adaptées aux besoins réels.
                        </p>
                        <p>
                            Curieux et orienté vers le system design, j’aime relever des
                            défis techniques et transformer des idées en produits
                            concrets.
                        </p>
                        <a
                            href="/cv_kamate_drissa.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary cv-btn"
                        >
                            Télécharger mon CV
                        </a>
                    </div>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Expérience</h2>
                    <div className="timeline">
                        {EXPERIENCES.map((exp) => (
                            <div className="timeline-item" key={exp.role + exp.period}>
                                <div className="timeline-dot" />
                                <div className="timeline-content">
                                    <div className="timeline-head">
                                        <h3>{exp.role}</h3>
                                        <span className="timeline-period">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="timeline-company">{exp.company}</p>
                                    <p className="timeline-description">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Compétences</h2>
                    <div className="skills-grid">
                        {SKILLS.map((group) => (
                            <div className="skill-group" key={group.category}>
                                <h4>{group.category}</h4>
                                <div className="skill-tags">
                                    {group.items.map((item) => (
                                        <span key={item} className="skill-tag">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Formation</h2>
                    <div className="timeline">
                        {EDUCATION.map((edu) => (
                            <div className="timeline-item" key={edu.school}>
                                <div className="timeline-dot" />
                                <div className="timeline-content">
                                    <div className="timeline-head">
                                        <h3>{edu.school}</h3>
                                        <span className="timeline-period">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="timeline-description">
                                        {edu.degree}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
