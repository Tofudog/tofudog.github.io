import NavBar from "./NavBar.js";
import ContactMe from "./ContactMe.js";
import ChangingTextColor from "../components/ColorPallete.js";

function AboutMe() {
    return <>
        <div>
            <div>
                <ChangingTextColor component="h1" text="Leonardo de Farias"></ChangingTextColor>
                <ChangingTextColor component="h2" text="CS Student @Emory"></ChangingTextColor>
                <ChangingTextColor component="h3" text="I am studying to be a software engineer, developing cool projects along the way"></ChangingTextColor>
                {/* <img src={logo} /> */}
            </div>
        </div>
    </>
}

export default AboutMe;