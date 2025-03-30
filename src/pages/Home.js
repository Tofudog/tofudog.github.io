import "./../styles/Home.css"
import NavBar from "./NavBar.js";
import AboutMe from "./AboutMe.js";
import CommandLine from "./CommandLine.js";
import ContactMe from "./ContactMe.js";
import Socials from "./Socials.js";
//import output01 from "../scripts/generate01s.js";

function Home() {
    //const section = output01();
    return <>
        <div class="test-flex-container">
            <div id="test-space"></div>
            <div>
                <NavBar></NavBar>
                <br></br>
                <AboutMe></AboutMe>
                <br></br><br></br>
                <CommandLine></CommandLine>
                <br></br><br></br><br></br>
                <ContactMe></ContactMe>
                <Socials></Socials>
                <br></br><br></br>
            </div>
            <div id="test-space"></div>
        </div>
    </>
}

export default Home;