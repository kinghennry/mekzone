import  { useState, useRef, useEffect } from 'react';
import "./navbar.css"
import { links, social } from '../../data/link';
import {Link} from "react-router-dom"
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [show, handleShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleSlide = () => {
    if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleSlide);
     return () => {
            window.removeEventListener("scroll",handleSlide);
        };
  }, [])
  
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


    return (
        <header className={`header ${show && "header--black"}`}>
        {/* <header className="header"> */}
            <div className='nav-center'>
            <div className='nav-header'>
            <Link to="/">
              <h1 className={`nav__logo ${show && "nav__logo--white"}`}>Mekzone</h1>
            </Link>
            <div className="nav-toggle" onClick={toggleLinks}>
              <span className={`span ${show && "span__show"}`} style={{ transform: showLinks ? "rotate(45deg)" : "" }}></span>
              <span className={`span ${show && "span__show"}`} style={{ opacity: showLinks ? "0" : "" }}></span>
              <span className={`span ${show && "span__show"}`} style={{ transform: showLinks ? "rotate(-45deg)" : "" }}></span>
            </div>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link className='link' to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social-icons'>
          {/* <h1>hello</h1> */}
        </div>
      </div>
        </header>
    )
}
