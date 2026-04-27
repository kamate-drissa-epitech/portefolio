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
        name: "Simulation de prêt — EDANE",
        description:
            "Un outil métier qui aide les conseillers à projeter un crédit en quelques secondes. Calculs automatisés, exports prêts à signer.",
        tag: "Full-stack",
        color: "#2563eb",
    },
    {
        name: "App mobile de géolocalisation",
        description:
            "Suivi des clients sur le terrain en temps réel — pensée pour les équipes commerciales mobiles, avec gestion fine des rôles.",
        tag: "Mobile",
        color: "#16a34a",
    },
    {
        name: "System Design",
        description:
            "Mes notes vivantes sur la conception de systèmes à l’échelle. Ce que j’apprends en lisant, en construisant, et en cassant des trucs.",
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
                    Je transforme des idées en produits qui tournent vraiment —
                    de l’interface utilisateur à l’architecture serveur. Mon truc :
                    comprendre un problème en profondeur, livrer du code propre,
                    et faire en sorte que ça tienne la charge.
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
                            Quelques projets sur lesquels je travaille en ce moment.
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
                        <h3>Un projet en tête ?</h3>
                        <p>
                            Une opportunité, une collaboration, ou juste l’envie
                            de discuter tech — écris-moi, je réponds vite.
                        </p>
                        <div className="cta-actions">
                            <NavLink to="/about" className="btn btn-primary">
                                Mon parcours
                            </NavLink>
                            <a
                                href="mailto:drissa.kamate@epitech.eu"
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
