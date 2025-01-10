import './AboutMe.css' //uses similar styling anyways
import logo from './assets/images/funny_meme1.png'

function Projects() {
    return (
        <div>
            <div class="inline-block-child">
                <ul>
                    <li>
                        <a href="https://github.com/Tofudog/HiraganaQuiz">
                        HiraganaQuiz
                        </a> <p>(follow instructions)</p>
                    </li>
                    <li>
                        <a href="https://github.com/Tofudog/MemeForum">MemeForum</a>
                        <p>(unfinished)</p>
                    </li>
                </ul>
                <br></br> <br></br> <br></br>
            </div>
            <div class="inline-block-child-right-side">
                <div>
                    <h2>
                        Projects
                    </h2>
                </div>
                <div>
                    <img src={logo} width={220} height={220} alt='meme'/>
                </div>
            </div>
        </div>
    )
}


export default Projects;