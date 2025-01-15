import './AboutMe.css' //uses similar styling anyways
import EmailForm from './EmailForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './assets/images/ness_photo.png'
import { IMAGE_DIMENSIONS } from './CONSTANTS';

function Ask() {
    return (
        <>
            <div class="about-me-container">
                <div class="inline-block-child">
                    <h2>Ask me Anything!</h2>
                    <img src={logo} width={IMAGE_DIMENSIONS[0]} height={IMAGE_DIMENSIONS[1]} alt='Ness'/>
                    <br></br> <br></br>
                </div>
                <div class="inline-block-child-right-side">
                    <EmailForm></EmailForm>
                </div>
            </div>
        </>
    )
}

export default Ask