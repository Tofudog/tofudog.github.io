import './AboutMe.css' //uses similar styling anyways
import logo from './assets/images/funny_meme1.png'

function Projects() {
    return (
        <div>
            <div class="inline-block-child">
                <ul>
                    <li>
                        <a href="https://github.com/Tofudog/HiraganaQuiz">HiraganaQuiz</a> (follow instructions)
                    </li>
                    <li>
                        <a href="https://github.com/Tofudog/MemeForum">MemeForum</a> (unfinished)
                    </li>
                </ul>
            </div>
            <div class="inline-block-child">
                <div>
                    <h2>
                        Projects
                    </h2>
                </div>
                <div>
                    <img src={logo} width={150} height={150}/>
                </div>
            </div>
        </div>
    )
}


export default Projects;