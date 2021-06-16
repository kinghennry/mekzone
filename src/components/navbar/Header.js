import React,{useState} from 'react'
import "./Header.css"
import logo from "../images/logo-bookmark.svg"
import img from "../components/logo-bookmark-white.svg"

import {routes} from "../data"

function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <header>
            <div className="container">
                <nav className=" nav fx sb ai">
                    <div className="nav__logo">
                        <img src={logo} alt="" className={`${toggle ? "none" : ""}`}/>
                    </div>
                    <div className="nav__toggle" onClick={() => {setToggle(!toggle)}}>
                        <span className={`${toggle ? "span1--active" : ""}`}
                         ></span>
                        <span style={
                            { opacity: toggle ? "0" : "" }
                           
                        }></span>
                        <span style={{ transform: toggle ? "rotate(-45deg)" : "" }}></span>
                    </div>
                    <ul className={`nav__list fx sa ${toggle ? 'nav__list--active' : ""}`}>
                        <img src={img} className="nav__listImg" alt=""/>
                        {routes.map(route => {
                            const {id,link}=route
                            return (
                                <>
                                <li className="nav__item" key={id}>
                                    <a href="" className="nav__link">
                                        {link}
                                    </a>
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

export default Header

    return (
      <header>
        <div className="container">
          <nav>
            <Link to="/">
              <h1 className="nav__logo">Mekzone</h1>
            </Link>
            <div className="nav-toggle" onClick={toggleLinks}>
              <span className={`${showLinks ? "span1--active" : ""}`}></span>
              <span style={{ opacity: showLinks ? "0" : "" }}></span>
              <span style={{ transform: showLinks ? "rotate(-45deg)" : "" }}></span>
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                  {links.map((link) => {
                  const { id, url, text } = link;
                    return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                    );
                  })}
              </ul>
            </div>
            <div style={{display:"none"}}>
              <h1>hello</h1>
            </div>
           </nav>
        </div>
        </header>
    )