import React from 'react'
import downArrow from "../images/down-arrows.svg"
import Heroimg from "../images/homepage/mobile/image-homepage-hero.jpg"
import Herotab from "../images/homepage/tablet/image-homepage-hero.jpg"
import Herodesktop from "../images/homepage/desktop/image-homepage-hero.jpg"
import "../css/Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <main className="main">
            <div className="container px">
                <div className="banner">
                <div className="hero__img">
                    <img src={Heroimg} alt="henry" className="mobile"/>
                    <img src={Herotab} alt="henry" className="tab"/>
                    <img src={Herodesktop} alt="henry" className="desktop"/>
                </div>
                <div className="home__hero">
            <h1 className="hero_text">
                    Hey, I’m Henry Ogbu and I love building beautiful websites.
            </h1>
            </div>
                </div>
                
                <div className="home__about">
                     <div className="home-about__image">
                </div>
                <div className="home-about__content">
                    <h2>About Me</h2>
                    <p>I’m a fullstack  developer looking for a new role in an exciting company. 
                    I focus on writing accessible HTML, using modern CSS practices and writing clean 
                    JavaScript. When writing JavaScript code, I  use React for the frontend and Node Js for the backend. I’m based in Nigeria but I’m happy working remotely 
                    and have experience in remote teams. When I’m not coding, you’ll find me playing video games or reading novels. 
                    I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
                    you to check out my work.</p>
                    <Link className="hero__link" to="/portfolio">
                        GO TO PORTFOLIO
                    </Link>
                </div>
                </div>

                 <section className="newsletter">
        <h2 >Interested in doing a project together?</h2>
        <div className="call-to-action__line"></div>
        <Link to="./contact">Contact Me</Link>
      </section>
                 </div>

        </main>
    )
}

export default Home
