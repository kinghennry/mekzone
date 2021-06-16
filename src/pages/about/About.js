import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import team from "../../images/team.jpg"
export default function About() {
    return (
        <>
            <Navbar/>
            <section className="about">
                <div className="container">
                    <div className="about__details">
                        <div className="about__img">
                            <img src={team} alt="team" />
                        </div>
                        <h1>We Help IT Companies Scale Engineering Capacity</h1>
                        <p>
                            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff.
                        </p>
                    </div>
                    <h1>about</h1>
                </div>
            </section>
            <Footer/>
        </>
    )
}
