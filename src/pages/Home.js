import "./../styles/globals.css";
import "./../styles/Home.css";
import NavBar from "./NavBar.js";
import MyExperiences from "./MyExperiences.js";
import MyProjects from "./MyProjects.js";
import MySkills from "./MySkills.js";
import MyContactMe from "./MyContactMe.js";

import ChangingTextColor from "../components/ColorPallete";
/*
{ <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % npm start this stupid website"></ChangingTextColor>
                <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % alright npm deploy i guess :("></ChangingTextColor> }
*/

const MALLOW_SRC = "https://media.tenor.com/9EWlRwyQ-2wAAAAj/super-mario-super-mario-rpg.gif";

function Home() {
    return <>
        <div id="home-form">
            <div>
                <NavBar></NavBar>
            </div>
            <div id="about-me-scroll-view"></div>
            <div class="space-top" id="about-me">
                <div class="flex-container-center">
                    <ChangingTextColor component="h1" text="About Me"></ChangingTextColor>
                </div>
                <div class="flex-container-center">
                    <div id="profile-frame">
                        <img id="profile-picture" src={MALLOW_SRC} />
                    </div>
                </div>
                <div class="flex-container-center">
                    <h3 id="profile-text">
                        My name is Leonardo de Farias and I am a Computer Science major
                        at Emory University. I like to build projects and learn new things.
                    </h3>
                </div>
                <br></br><br></br><div id="my-experiences-scroll-view"></div><br></br><br></br>
                <div class="flex-container-center">
                    <ChangingTextColor component="h1" text="Experiences"></ChangingTextColor>
                </div>
                <div class="flex-container-center">
                    <div id="my-experiences">
                        <MyExperiences></MyExperiences>
                    </div>
                </div>
                <br></br><br></br><div id="my-projects-scroll-view"></div><br></br><br></br>
                <div class="flex-container-center">
                    <ChangingTextColor component="h1" text="Projects"></ChangingTextColor>
                </div>
                <div class="flex-container-center">
                    <div id="my-projects">
                        <MyProjects></MyProjects>
                    </div>
                </div>
                <br></br><br></br><div id="my-skills-scroll-view"></div><br></br><br></br>
                <div class="flex-container-center">
                    <ChangingTextColor component="h1" text="Skills"></ChangingTextColor>
                </div>
                <div class="flex-container-center">
                    <div id="my-skills">
                        <MySkills></MySkills>
                    </div>
                </div>
                <br></br><br></br><div id="contact-part-scroll-view"></div><br></br><br></br>
            </div>
            <div id="contact-part">
                <div class="flex-container-center">
                    <ChangingTextColor component="h1" text="Contact Me"></ChangingTextColor>
                </div>
                <div class="flex-container-center">
                    <MyContactMe></MyContactMe>
                </div>
                <br></br><br></br><br></br>
            </div>
        </div>
    </>
}

export default Home;