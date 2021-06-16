import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Portfolio.css"
import {projects} from "../data"
const Portfolio = () => {
    return (
        <article>
            <div className="container px">
                <div className="grid__box">

                    {projects.map((project) => {
                        const {id,name,img,desc,git,site}= project
                        return (
                            <div className="portfl" key={id}>
                                <div className="portfl__img" style={{backgroundImage:`url(${img})`}}>
                                </div>
                                 <div className="portfl__text">
                                    <h2>{name}</h2>
                                    <p>{desc}</p>
                                    <div className="portfl__btn">
                                        {/* <Link to={git} className="git">
                                            GITHUB REPO
                                        </Link> */}
                                        <a href={git } className="git" target="_blank" rel="noopener noreferrer">
                                            GITHUB REPO
                                        </a>
                                        <a href={site } className="portfl__live" target="_blank" rel="noopener noreferrer">
                                            VIEW PROJECT LIVE
                                        </a>
                                        {/* <Link to={site} className="portfl__live">
                                            VIEW PROJECT LIVE
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                    )

                        
                    })}
              
               </div>
                </div>
        </article>
    )
}

export default Portfolio
