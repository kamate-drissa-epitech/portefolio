import './About.css'
import {ModuleCard} from "../../components/UI/ModuleCard.jsx";


export  function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-photo-container">
                    <img src="./drissa.kamate@epitech.eu.jpg" alt="Kamate Drissa"/>
                </div>
                <div className="path">
                    <p className="welcome">
                        Biennvenue, je suis <span className="full-name">Kamate Drissa</span>
                    </p>
                    Je suis développeur web et mobile, passionné par la création d’applications modernes et
                    performantes.
                    Je maîtrise aussi bien le front-end (React.js, Vue.js) que le back-end (PHP/Laravel, Python/Django,
                    MySQL, MongoDB, PostgreSQL), ce qui me permet de concevoir des solutions complètes et adaptées aux
                    besoins réels.
                    Curieux et orienté vers le system design, j’aime relever des défis techniques et transformer des
                    idées en produits concrets.
                </div>
                <section className="my-modules">
                    <p className="title">What I'm building</p>
                    <div className="modules">
                        <ModuleCard
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quos."
                            moduleName="Newsletter"
                            bgColor="red"/>
                        <ModuleCard
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quos."
                            moduleName="Newsletter"
                            bgColor="green"/>
                        <ModuleCard
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quos."
                            moduleName="Newsletter"
                            bgColor="purple"/>
                    </div>
                </section>
            </div>
        </div>
    )
}