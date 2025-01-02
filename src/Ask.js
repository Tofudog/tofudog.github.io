import './AboutMe.css' //uses similar styling anyways
import EmailForm from './EmailForm'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Ask() {
    return (
        <>
            <div>
                <h2>Ask me Anything!</h2>
            </div>
            <div>
                <EmailForm></EmailForm>
            </div>
        </>
    )
}

export default Ask