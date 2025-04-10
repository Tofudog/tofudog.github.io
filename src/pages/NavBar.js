import React, { useState, useEffect } from 'react';
import terminal_logo from "./../assets/images/terminal_logo.png"

import ChangingTextColor from "../components/ColorPallete";
import { Link } from 'react-router-dom';

/*
{ <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % npm start this stupid website"></ChangingTextColor>
                <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % alright npm deploy i guess :("></ChangingTextColor> }
*/

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Optional smooth scrolling
    }
  };

function NavBarNames() {
    return <>
        <div class="flex-container-backwards">
            <div class="flex-item">
                <p class="nice-text">
                    About
                </p>
            </div>
            <div class="flex-item">
                <p class="nice-text">
                    Projects
                </p>
            </div>
            <div class="flex-item">
                <p class="nice-text">
                    Skills
                </p>
            </div>
            <div class="flex-item">
                <p class="nice-text">
                    Contact
                </p>
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
    const [navShows, setNavShows] = useState(false); //determine whether navlist is being rendered
    return <>
            <div class="flex-container-backwards">
                <div class="flex-item">
                    <button onClick={() => ClickedMe(navShows, setNavShows)}>
                        <img id="navbar-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNGLGilxB_EygnmkdbDYDcJNFVdbKtzh0tQ&s"></img>
                    </button>
                    {navShows && <NavListComponent></NavListComponent>}
                </div>
                <div class="flex-item">
                    <Link to="/command-line" target="_blank" rel="noopener noreferrer">
                        <img id="top-part-image" src={terminal_logo} />
                    </Link>
                </div>
        </div>
    </>
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
            {screenWidth >= 775 && <NavBarNames></NavBarNames>}
            {screenWidth < 775 && <NavBarList></NavBarList>}
        </div>
    </>
}

export default NavBar;