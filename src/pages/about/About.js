import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Work from "../../components/work/Work"
import team from "../../images/team.jpg"
import {useState} from 'react'
import data from "../../data/about"
import "./about.css"
import Accordion from "../../components/accordion/Accordion"
export default function About() {
    const [answers, setAnswers] = useState(data);
    return (
        <>
            <Navbar/>
            <section className="about">
                <div className="container">
                    <div className="about__flex">
                        <div className="about__details">
                            <div className="about__img">
                                <img src={team} alt="team" />
                            </div>
                        </div>
                        <div className="about__text">
                            <h1>We Help IT Companies Scale Engineering Capacity</h1>
                            <p>
                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
                            </p>

                            {answers.map(answer => {
                                return  <Accordion key={answer.id} {...answer} />
                            })}
                        </div>
                    </div>
                    <Work/>
                </div>
            </section>
            <Footer/>
        </>
    )
}
