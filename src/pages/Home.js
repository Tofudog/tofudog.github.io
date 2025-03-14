import "./../styles/Home.css"
import AboutMe from "./AboutMe.js";
import CommandLine from "./CommandLine.js";
import output01 from "../scripts/generate01s.js";

function Home() {
    const section = output01();
    return <>
        <div class="vertical-section">
            <div>
                <div id="section2">
                    <h2 class="darker-color">{section}</h2>
                </div>
                <div id="section3">
                    <CommandLine></CommandLine>
                </div>
            </div>
            <AboutMe></AboutMe>
        </div>
    </>
}

export default Home;