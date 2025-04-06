import "./../styles/Home.css";
import terminal_logo from "./../assets/images/terminal_logo.png"

import ChangingTextColor from "../components/ColorPallete";
import { Link } from 'react-router-dom';

/*
{ <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % npm start this stupid website"></ChangingTextColor>
                <ChangingTextColor component="h5" text="ldefari@Leonardos-Laptop personal_website % alright npm deploy i guess :("></ChangingTextColor> }
*/

function NavBar() {
    return <>
        <div id="top-part" class="flex-container">
            <div class="flex-item">
                <p class="nice-text">
                    Leonardo de Farias
                </p>
            </div>
            <div id="top-part-space"></div>
            <div class="flex-item">
                <p class="nice-text">
                    About
                </p>
            </div>
            <div class="flex-item">
                <p class="nice-text">
                    Projects
                </p>
            </div>
            <div class="flex-item">
                <p class="nice-text">
                    Skills
                </p>
            </div>
            <div class="flex-item">
                <p class="nice-text">
                    Contact
                </p>
            </div>
            <div class="flex-item">
                <img id="top-part-image" src={terminal_logo} />
            </div>
        </div>
    </>
}

export default NavBar;