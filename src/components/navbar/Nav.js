import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "../css/Nav.css"
import {routes} from "../data"
const Nav = () => {
        const [toggle, setToggle] = useState(false)
 const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <header  className={`header ${show && "header--black"}`}>
            <div className="container">
                <nav className="flex sb ai">
                    <h1>Henry</h1>
                    <div className="nav__toggle" onClick={() => {setToggle(!toggle)}}>
                        <span className={`${toggle ? "span1--active" : ""}`} ></span>
                        <span style={{ opacity: toggle ? "0" : "" }}></span>
                        <span style={{ transform: toggle ? "rotate(-45deg)" : "" }}></span>
                    </div>

                    <ul className={`nav__list flex sa ${toggle ? 'nav__list--active' : ""}`}>
                        {routes.map(route => {
                            const {id,link,color,page}=route
                            return (
                                <>
                                <li className="nav__item" key={id}>
                                    <Link to={page} className={`nav__link ${color}`}>
                                        {link}
                                    </Link>
                                    </li>
                                </>
                                ) 
                            
                        })}
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Nav
