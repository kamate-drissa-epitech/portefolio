import './Home.css'
import arrowRightIcon from "../../assets/arrow_right.svg"
import lightIcon from "../../assets/light_mode.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";
import {useContext} from "react";
import {ThemContext} from "../../hooks/globals/useContext.js";
import {SocialMediaCard} from "../../components/UI/SocialMediaCard.jsx";
import {ModuleCard} from "../../components/UI/ModuleCard.jsx";


const MEDIAS = [
    {
        name : "Facebook",
        image : facebook,
        alt : "Facebook img",
        followers : '222k'
    },
    {
        name : "WhatsApp",
        image : whatsapp,
        alt : "WhatsApp image",
        followers : '300k'
    },
    {
        name : "LinkedIn",
        image : linkedin,
        alt : "LinkedIn image",
        followers : '+ 10k'
    },
    {
        name : "Github",
        image : github,
        alt : "Github image",
        followers : '+ 10k'
    }
]

export  function Home() {
    const theme = useContext(ThemContext)


    return (
        <div className="home">
            <div className="home-container">

                <section className="profil-photo">
                    <div className="profil-photo-container">
                        <img src="./drissa.kamate@epitech.eu.jpg" alt="profil picture"/>
                    </div>
                </section>

                <section className="profession">
                    <div className={theme === 'light' ? 'profession-container' : 'profession-container dark'}>
                        <span onClick={() => null}>Développeur d'application web & mobile</span>
                        {/*<img src={arrowRightIcon} alt="arraw rightIcon"/>*/}
                    </div>
                </section>

                <section className="name">
                    Biennvenue, je suis <span className="full-name">Kamate Drissa</span>
                </section>

                <section className="self-description">
                    Passionné de développement full stack, je conçois des solutions
                    digitales fiables et modernes. Auteur d’un portfolio de projets
                    techniques illustrant mon expertise en front et back-end.
                </section>

                <section className="socials-medias">
                    {
                        MEDIAS.map((media, index) => (
                            <SocialMediaCard mediaName={media.name} image={media.image} followers={media.followers} imageAlt={media.alt} />
                        ))
                    }
                </section>

                <section className="plateforms">
                    <div className="plateforms-name">
                        Newletters
                    </div>

                </section>

                <section className="what-im-doing">
                    <p className="title">What I'm building</p>
                    <div className="modules">

                        <ModuleCard
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quos."
                            moduleName="Newsletter"
                            bgColor="red" />
                        <ModuleCard
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quos."
                            moduleName="Newsletter"
                            bgColor="green" />
                        <ModuleCard
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quos."
                            moduleName="Newsletter"
                            bgColor="purple" />
                    </div>
                </section>

                <section className="contacts">
                    Contacts
                </section>

                <section className="footer">
                    Footer
                </section>
            </div>
        </div>
    )
}