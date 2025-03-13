import "./../styles/Home.css"
import NavBar from "./NavBar.js";
import AboutMe from "./AboutMe.js";

function Home() {
    return <>
        <div class="vertical-section">
            <NavBar></NavBar>
            <AboutMe></AboutMe>
        </div>
    </>
}

export default Home;