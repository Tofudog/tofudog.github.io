import './AboutMe.css' //uses similar styling anyways
import logo from './assets/images/funny_meme1.png'
import { IMAGE_DIMENSIONS } from './CONSTANTS'

function Projects() {
    return (
        <div class="about-me-container">
            <div class="inline-block-child">
                <div>
                    <h2>
                        Projects
                    </h2>
                </div>
                <div>
                    <img src={logo} width={IMAGE_DIMENSIONS[0]} height={IMAGE_DIMENSIONS[1]} alt='meme'/>
                </div>
            </div>
            <div class="inline-block-child-right-side">
                <ul>
                    <li>
                        <a href="https://github.com/Tofudog/HiraganaQuiz">
                        HiraganaQuiz
                        </a>
                        <h4>
                            Follow the instructions on the repository. It's a simple game that tests
                            your knowledge of Hiragana character sounds.
                        </h4>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://github.com/Tofudog/MemeForum">MemeForum</a>
                        <h4>
                            This project is currently unfinished. The goal is to make a forum that
                            enables users to like/dislike memes.
                        </h4>
                    </li>
                    <br></br>
                    <li>
                        <a>Amazon Project</a>
                        <h4>
                            My intern project was making LLMs multimodal in an internal platform
                            called Harmonia.
                        </h4>
                    </li>
                </ul>
                <br></br> <br></br> <br></br>
            </div>
        </div>
    )
}


export default Projects;