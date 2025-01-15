
import './AboutMe.css'
import logo from './assets/images/ldefari_profile.jpg'
import { IMAGE_DIMENSIONS } from './CONSTANTS';

function AboutMe() {
    return (
        <div class="about-me-container">
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
                    <img src={logo} width={IMAGE_DIMENSIONS[0]} height={IMAGE_DIMENSIONS[1]} alt='Me'/>
                </div>
            </div>
            <div class="inline-block-child-right-side">
                {/*Where description goes*/}
                <br></br><br></br><br></br><br></br>
                <h4>
                    Howdy! My name is Leonardo de Farias and I'm a 2nd year CS student at Emory University.
                    I am interested in full stack website development, machine learning, low-level programming, and more.
                </h4>
                <h4>
                    On my free time, I enjoy doing lots of things, such as eating, playing video games,
                    and making low-quality stop motion films.
                </h4>
                <h4>
                    I believe success requires hard work and endurace.
                </h4>
                <br></br>
            </div>
        </div>
    );
}

export default AboutMe