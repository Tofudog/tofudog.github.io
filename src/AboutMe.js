
import './AboutMe.css'
import logo from './assets/images/ldefari_profile.jpg'

function AboutMe() {
    return (
        <div>
            <div class="inline-block-child">
                {/*Where Intro info goes*/}
                <div>
                    <h2>
                        About Me
                    </h2>
                    {/*Where About Me marker/button goes*/}
                </div>
                <div>
                    {/*Where image goes*/}
                    <img src={logo} width={150} height={150}/>
                </div>
            </div>
            <div class="inline-block-child">
                {/*Where description goes*/}
                <p>
                    Howdy! My name is Leonardo de Farias and I'm
                </p>
                <p>
                    a 2nd yr CS student at Emory University
                </p>
                <p>
                    I like eating food, playing chess, and walking around.
                </p>
            </div>
        </div>
    );
}

export default AboutMe