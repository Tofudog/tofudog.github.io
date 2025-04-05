import { useState } from "react";

import "./../styles/Home.css"
import NavBar from "./NavBar.js";
import AboutMe from "./AboutMe.js";
import CommandLine from "./CommandLine.js";
import ContactMe from "./ContactMe.js";
import Socials from "./Socials.js";

function Home() {
    return <>
        <div class="test-flex-container">
            <div id="test-space"></div>
            <div>
              <AboutMe></AboutMe>
              <br></br><br></br><br></br><br></br>
              <CommandLine></CommandLine>
            </div>
            <div id="test-space"></div>
        </div>
    </>
}

export default Home;