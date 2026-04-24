import "./Home.css";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";
import { SocialMediaCard } from "../../components/UI/SocialMediaCard.jsx";
import { ModuleCard } from "../../components/UI/ModuleCard.jsx";
import { NavLink } from "react-router-dom";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

const MEDIAS = [
    {
        name: "GitHub",
        image: github,
        alt: "GitHub",
        followers: "Open source",
        url: "https://github.com/kamate-drissa-epitech",
    },
    {
        name: "LinkedIn",
        image: linkedin,
        alt: "LinkedIn",
        followers: "Parcours",
        url: "https://www.linkedin.com/in/drissa-kamate-7255b4161/",
    },
    {
        name: "WhatsApp",
        image: whatsapp,
        alt: "WhatsApp",
        followers: "Contact",
        url: whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#",
    },
    {
        name: "Facebook",
        image: facebook,
        alt: "Facebook",
        followers: "Réseau",
        url: "#",
    },
];

const MODULES = [
    {
        name: "Bus Tickets",
        description:
            "Application web permettant d’acheter des tickets de bus et de générer des PDF, avec stockage PostgreSQL.",
        tag: "Full-stack",
        color: "#2563eb",
    },
    {
        name: "Portfolio",
        description:
            "Ce portfolio développé en React.js — design minimaliste, thème clair/sombre, responsive.",
        tag: "React",
        color: "#16a34a",
    },
    {
        name: "System Design",
        description:
            "Notes et schémas sur la conception de systèmes : scalabilité, bases de données, architectures distribuées.",
        tag: "En cours",
        color: "#a855f7",
    },
];

export function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <section className="profil-photo">
                    <div className="profil-photo-container">
                        <img src="/drissa.kamate@epitech.eu.jpg" alt="Kamate Drissa" />
                    </div>
                </section>

                <section className="profession">
                    <div className="profession-container">
                        <span className="status-dot" />
                        <span>Développeur Full-Stack · Web & Mobile</span>
                    </div>
                </section>

                <section className="name">
                    Bienvenue, je suis <span className="full-name">Kamate Drissa</span>
                </section>

                <section className="self-description">
                    Passionné de développement full-stack, je conçois des solutions
                    digitales fiables et modernes. Curieux par nature, j’aime transformer
                    des idées concrètes en produits robustes — du front-end soigné au
                    back-end bien architecturé.
                </section>

                <section className="socials-medias">
                    {MEDIAS.map((media) => (
                        <SocialMediaCard
                            key={media.name}
                            url={media.url}
                            mediaName={media.name}
                            image={media.image}
                            followers={media.followers}
                            imageAlt={media.alt}
                        />
                    ))}
                </section>

                <section className="what-im-doing">
                    <div className="section-head">
                        <p className="title">Ce que je construis</p>
                        <p className="subtitle">
                            Projets et expérimentations en cours.
                        </p>
                    </div>
                    <div className="modules">
                        {MODULES.map((m) => (
                            <ModuleCard
                                key={m.name}
                                moduleName={m.name}
                                description={m.description}
                                bgColor={m.color}
                                tag={m.tag}
                            />
                        ))}
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-card">
                        <h3>Envie d’échanger ?</h3>
                        <p>
                            Je suis ouvert aux opportunités et collaborations. N’hésitez
                            pas à me contacter.
                        </p>
                        <div className="cta-actions">
                            <NavLink to="/about" className="btn btn-primary">
                                En savoir plus
                            </NavLink>
                            <a
                                href="mailto:kat.dris13@gmail.com"
                                className="btn btn-outline"
                            >
                                Me contacter
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
