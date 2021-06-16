import home from "../../images/8.png"
import "./hero.css"
export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="home">
                    <div className="home__header">
                        <h1>Creating a better</h1>
                        <span>
                            IT Solutions
                        </span>
                        <h4>Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.</h4>
                        <a >Start A Project</a>
                    </div>
                    <div className="home__image">
                        <img src={home} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
