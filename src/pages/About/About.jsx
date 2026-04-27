import "./About.css";

const EXPERIENCES = [
    {
        role: "Développeur Full-Stack",
        company: "EDANE — Cocody-Angré",
        period: "Oct. 2024 — Présent",
        missions: [
            "Optimisation du système par la compression des fichiers.",
            "Téléchargement de dossiers depuis un répertoire lourd (+10 Go).",
            "Mise en place d’un système de logs des connexions.",
            "Interface de simulation de prêt de crédit.",
            "Application mobile de géolocalisation des clients.",
            "Tracking des connexions utilisateurs multi-rôles.",
        ],
    },
    {
        role: "Développeur Full-Stack",
        company: "WECODE — Coding Academy",
        period: "Fév. 2023 — Oct. 2024",
        missions: [
            "Plateforme de publication d’annonces.",
            "Surveillance des performances système et résolution d’incidents techniques.",
            "Participation à la planification et à la mise en œuvre de projets d’infrastructure.",
        ],
    },
];

const SKILLS = [
    {
        category: "Frontend",
        items: ["JavaScript", "Vue.js", "React.js"],
    },
    {
        category: "Backend",
        items: ["PHP / Laravel", "Python / Django", "Node.js"],
    },
    {
        category: "Bases de données",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        category: "Architecture",
        items: ["System Design"],
    },
];

const EDUCATION = [
    {
        school: "Coding Academy — Epitech",
        degree: "Formation intensive en développement logiciel",
        period: "2023 — 2024",
    },
    {
        school: "Université Virtuelle de Côte d’Ivoire",
        degree: "Licence en Informatique",
        period: "2017 — 2021",
    },
    {
        school: "Lycée Moderne Gbon",
        degree: "Baccalauréat",
        period: "2016 — 2017",
    },
];

const CERTIFICATIONS = [
    {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
    },
    {
        name: "Algorithms and Data Structures",
        issuer: "freeCodeCamp",
    },
];

const LANGUAGES = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" },
    { name: "Arabe", level: "Lecture" },
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
                            Je suis tombé dans le code par curiosité, j’y suis
                            resté pour la satisfaction de voir un système prendre
                            vie. Aujourd’hui, je construis des produits utilisés
                            tous les jours par de vraies équipes — du SI métier
                            interne à l’app mobile sur le terrain.
                        </p>
                        <p>
                            Ce qui me motive : comprendre un problème en
                            profondeur, choisir le bon outil pour le résoudre, et
                            livrer quelque chose de propre. Le system design est
                            devenu une obsession au fil des projets — voir comment
                            les pièces s’assemblent à grande échelle, c’est là que
                            ça devient passionnant.
                        </p>
                        <p>
                            Basé à Cocody-Angré, en Côte d’Ivoire. Disponible pour
                            des missions en remote ou en hybride.
                        </p>
                        <div className="contact-info">
                            <a href="mailto:drissa.kamate@epitech.eu">
                                drissa.kamate@epitech.eu
                            </a>
                            <span>·</span>
                            <a href="tel:+2250575736417">+225 05 75 73 64 17</a>
                        </div>
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
                                    <ul className="timeline-missions">
                                        {exp.missions.map((m) => (
                                            <li key={m}>{m}</li>
                                        ))}
                                    </ul>
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

                <section className="about-section">
                    <h2 className="section-title">Certifications</h2>
                    <div className="cert-list">
                        {CERTIFICATIONS.map((cert) => (
                            <div className="cert-item" key={cert.name}>
                                <div className="cert-content">
                                    <h3>{cert.name}</h3>
                                    <p>{cert.issuer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section">
                    <h2 className="section-title">Langues</h2>
                    <div className="languages">
                        {LANGUAGES.map((lang) => (
                            <div className="language-item" key={lang.name}>
                                <span className="language-name">{lang.name}</span>
                                <span className="language-level">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
