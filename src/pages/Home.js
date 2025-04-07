import { useState } from "react";

import "./../styles/Home.css";
import NavBar from "./NavBar.js";
import AboutMe from "./AboutMe.js";
import CommandLine from "./CommandLine.js";
import ContactMe from "./ContactMe.js";
import Socials from "./Socials.js";
import MyExperiences from "./MyExperiences.js";
import MyProjects from "./MyProjects.js";
import MySkills from "./MySkills.js";
import MyContactMe from "./MyContactMe.js";
import BottomNavbar from "./BottomNavbar.js";

import mii_logo from "./../assets/images/mii_photo.png";
import ness_photo from "./../assets/images/ness_photo.png";

/*
    Previous Home screen (now Leoterminal):
        /* <div class="test-flex-container">
            <div id="test-space"></div>
            <div>
              <AboutMe></AboutMe>
              <br></br><br></br><br></br><br></br>
              <CommandLine></CommandLine>
            </div>
            <div id="test-space"></div>
        </div>
*/

function Home() {
    return <>
        <div>
            <NavBar></NavBar>
        </div>
        <div class="space-left">
            <h1>
                About Me
            </h1>
            <div id="profile-frame">
                <img id="profile-picture" src={ness_photo} />
            </div>
            <h3 id="profile-text">
                My name is Leonardo de Farias and I am a Computer Science major
                at Emory University. I like to build projects and learn new things.
            </h3>
            <br></br><br></br><br></br><br></br>
            <div>
                <MyExperiences></MyExperiences>
            </div>
            <br></br><br></br><br></br><br></br>
            <div>
                <MyProjects></MyProjects>
            </div>
            <br></br><br></br><br></br><br></br>
            <div>
                <MySkills></MySkills>
            </div>
            <br></br><br></br><br></br><br></br>
        </div>
        <div id="contact-part">
            <div class="space-left">
                <MyContactMe></MyContactMe>
            </div>
            <br></br><br></br>
        </div>
        <div id="bottom-part">
            <BottomNavbar></BottomNavbar>
        </div>
    </>
}

export default Home;