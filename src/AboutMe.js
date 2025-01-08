
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
                    <img src={logo} width={220} height={220}/>
                </div>
            </div>
            <div class="inline-block-child-right-side">
                {/*Where description goes*/}
                <h4>
                    Howdy! My name is Leonardo de Farias and I'm
                </h4>
                <h4>
                    a 2nd yr CS student at Emory University.
                </h4>
                <h4>
                    I enjoy traveling, walking my dog, and playing video games.
                </h4>
                <br></br> <br></br> <br></br>
            </div>
        </div>
    );
}

export default AboutMe