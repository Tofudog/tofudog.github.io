import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Title from "./Title";
import './MyHome.css'

function MyHome() {
    return (
        <div>
            <div class="section">
                <Title></Title>
            </div>
            <div class="section">
                <AboutMe></AboutMe>
            </div>
            <div class="section">
                <Projects></Projects>
            </div>
            <div id="bottom-space"></div>
        </div>
    );
}

export default MyHome