import './AboutMe.css' //uses similar styling anyways
import EmailForm from './EmailForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './assets/images/ness_photo.png'

function Ask() {
    return (
        <>
            <div class="inline-block-child">
                <h2>Ask me Anything!</h2>
                <img src={logo} width={220} height={220}/>
                <br></br> <br></br>
            </div>
            <div class="inline-block-child-right-side">
                <EmailForm></EmailForm>
            </div>
        </>
    )
}

export default Ask