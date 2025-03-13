import output01 from "./../scripts/generate01s";
import logo from "./../assets/images/pikachu.png"

function AboutMe() {
    const section = output01();
    return <>
        <div class="container-sections">
            <div id="section1">
                <h1>Leonardo de Farias</h1>
                <h2>CS Student @Emory</h2>
                <h3>I am studying to be a software engineer, developing cool projects along the way</h3>
                <img src={logo} />
            </div>
            <div id="section2">
                <h2 class="darker-color">{section}</h2>
            </div>
        </div>
    </>
}

export default AboutMe;