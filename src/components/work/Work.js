import React from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import works from "../../images/works.jpg"
import "./work.css"
export default function Work() {
    return (
        <section className="work">
            <div className="container">
                 <div className="about__flex">
                        <div className="about__details left">
                            <div className="faq__header">
                                <h4>WORKS ABOUT</h4>
                                <h1>Trusted by 5,000+ Happy Customers.</h1>
                                <p>Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case.</p>
                            <span>
                                <CheckCircleOutlineIcon className="work__icon" />
                                <h5>
                                100% Client Satisfaction
                                </h5>
                            </span>
                            <span>
                                <CheckCircleOutlineIcon className="work__icon"/>
                                <h5>
                                World Class Worker
                                </h5>
                            </span>
                            </div>
                    </div>
                    <div className="works__img">
                        <div className="work__img">
                            <img src={works} alt="works" />
                        </div>
                        <div className="work__text">
                            <h1>875+</h1>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    )
}
