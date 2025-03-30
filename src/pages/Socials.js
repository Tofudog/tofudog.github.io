import logo from "./../assets/images/pikachu.png";
import github_logo from "./../assets/images/github_logo.jpeg";
import linkedin_logo from "./../assets/images/linkedin_logo.png";
import leetcode_logo from "./../assets/images/leetcode_logo.png";
import codeforces_logo from "./../assets/images/codeforces_logo.png";
import chess_logo from "./../assets/images/chess_logo.png";

function Socials() {
    return <>
        <div class="flex-container">
            <div class="flex-item">
                <a href="https://github.com/Tofudog" target="_blank">
                    <img class="circular-img" src={github_logo} />
                </a>
            </div>                    
            <div class="flex-item">
                <a href="https://www.linkedin.com/in/leonardo-de-farias-857167222/" target="_blank">
                    <img class="circular-img" src={linkedin_logo} />
                </a>
            </div>
            <div class="flex-item">
                <a href="https://leetcode.com/u/Tofudog25/" target="_blank">
                    <img class="circular-img" src={leetcode_logo} />
                </a>
            </div>                    
            <div class="flex-item">
                <a href="https://codeforces.com/profile/defarias25" target="_blank">
                    <img src={codeforces_logo} />
                </a>
            </div>
            <div class="flex-item">
                <a href="https://www.chess.com/member/leonardodefarias25" target="_blank">
                    <img src={chess_logo} />
                </a>
            </div>
        </div>
    </>
}

export default Socials;
