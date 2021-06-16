import  { useState, useRef, useEffect } from 'react';
import "./navbar.css"
import { links, social } from '../data';
import logo from '../logo.svg';
import { FaBars } from 'react-icons/fa';
import {Link} from "react-router-dom"
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [show, handleShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

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
            <div className='nav-center'>
            <div className='nav-header'>
            <Link to="/">
              <h1 className={`nav__logo ${show && "logo--white"}`}>Mekzone</h1>
            </Link>
            <div className="nav-toggle" onClick={toggleLinks}>
              <span className={`${showLinks ? "span1--active" : ""}`}></span>
              <span style={{ opacity: showLinks ? "0" : "" }}></span>
              <span style={{ transform: showLinks ? "rotate(-45deg)" : "" }}></span>
            </div>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social-icons'>
          <h1>hello</h1>
        </div>
      </div>
        </header>
    )
}
