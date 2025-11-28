import React, { useState, useEffect, useRef } from 'react';
import terminal_logo from "./../assets/images/terminal_logo.png";
import navbar_dropdown_logo from "./../assets/images/navbar_dropdown.png";

import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
    const element = document.getElementById(`${id}-scroll-view`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Optional smooth scrolling
    }
};

function NavBarNames() {
    return <>
        <div class="flex-container-backwards">
            <div class="flex-item">
                <a class="navbar-title-section" onClick={() => scrollToSection("about-me")}><p>About</p></a>
            </div>
            <div class="flex-item">
                <a class="navbar-title-section" onClick={() => scrollToSection("my-experiences")}><p>Experiences</p></a>
            </div>
            <div class="flex-item">
                <a class="navbar-title-section" onClick={() => scrollToSection("my-projects")}><p>Projects</p></a>
            </div>
            <div class="flex-item">
                <a class="navbar-title-section" onClick={() => scrollToSection("my-skills")}><p>Skills</p></a>
            </div>
            <div class="flex-item">
                <a class="navbar-title-section" onClick={() => scrollToSection("contact-part")}><p>Contact</p></a>
            </div>
            <div class="flex-item">
                <Link to="/command-line" target="_blank" rel="noopener noreferrer">
                    <img id="top-part-image" src={terminal_logo} />
                </Link>
            </div>
        </div>
    </>
}

function NavListComponent() {
    return <>
        <div id="navbar-absolute">
            <a onClick={() => scrollToSection("about-me")}><h4>About</h4></a>
            <a onClick={() => scrollToSection("my-experiences")}><h4>Experiences</h4></a>
            <a onClick={() => scrollToSection("my-projects")}><h4>Projects</h4></a>
            <a onClick={() => scrollToSection("my-skills")}><h4>Skills</h4></a>
            <a onClick={() => scrollToSection("contact-part")}><h4>Contact</h4></a>
        </div>
    </>
}

function ClickedMe(navShows, setNavShows) {
    setNavShows(!navShows);
}

function NavBarList() {
    const [navShows, setNavShows] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setNavShows(false);
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div ref={navRef} className="flex-container-backwards">
            <div className="flex-item-nav">
                <button id="navbar-dropdown-button" onClick={() => ClickedMe(navShows, setNavShows)}>
                    <img id="navbar-image" src={navbar_dropdown_logo} alt="nav"/>
                </button>
                {navShows && <NavListComponent />}
            </div>
            <div className="flex-item-navs">
                <Link to="/command-line" target="_blank" rel="noopener noreferrer">
                    <img id="top-part-image" src={terminal_logo} alt="terminal" />
                </Link>
            </div>
        </div>
    );
}

function NavBar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return <>
        <div id="top-part" class="flex-container">
            <div class="flex-item">
                <p class="nice-text">
                    Leonardo de Farias
                </p>
            </div>
            {screenWidth >= 950 && <NavBarNames></NavBarNames>}
            {screenWidth <= 950 && <NavBarList></NavBarList>}
        </div>
    </>
}

export default NavBar;