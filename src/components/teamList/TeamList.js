import pruda from "../../images/pruda.jpg"
import deko from "../../images/deko.jpg"
import jonam from "../../images/jonam.jpg"
import {AiOutlinePlus} from "react-icons/ai"
export default function TeamList() {
    return (
        <section className="teams">
            <div className="container">
                <center className="blogs__title">
                    <h1>EXPERT TEAM</h1>
                    <h2>Meet Our Leadership</h2>
                </center>
                <div className="team__lists">
                    <div className="team__list">
                        <img src={pruda} alt="pruda" />
                        <div className="icon__container">
                            <AiOutlinePlus className="team__icon"/>
                        </div>
                    </div>
                    <div className="team__list">
                        <img src={jonam} alt="pruda" />
                        <div className="icon__container">
                            <AiOutlinePlus className="team__icon"/>
                        </div>
                    </div>
                    <div className="team__list">
                        <img src={deko} alt="pruda" />
                        <div className="icon__container">
                            <AiOutlinePlus className="team__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
