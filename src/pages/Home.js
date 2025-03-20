import "./../styles/Home.css"
import AboutMe from "./AboutMe.js";
import CommandLine from "./CommandLine.js";
import output01 from "../scripts/generate01s.js";

function Home() {
    const section = output01();
    return <>
        <div class="vertical-section">
            <div class="my-container">
                <AboutMe></AboutMe>
                <div id="my-section2">
                    <h2 class="darker-color"></h2>
                </div>
                <div id="my-section3">
                    <CommandLine></CommandLine>
                </div>
            </div>
        </div>
    </>
}

export default Home;