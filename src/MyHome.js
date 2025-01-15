import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Title from "./Title";
import Ask from "./Ask";
import './MyHome.css'
import MyJokes from "./pages/MyJokes";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Kitchen from "./pages/Kitchen";

function HomeScreen() {
    return <div>
        {/* <div class="section">
            <Title></Title>
        </div>
        <hr></hr> */}
        <div class="section">
            <AboutMe></AboutMe>
        </div>
        <hr></hr>
        <div class="section">
            <Projects></Projects>
        </div>
        <hr></hr>
        <div class="section">
            <Ask></Ask>
        </div>
        <div id="bottom-space"></div>
    </div>
}

function MyHome() {
    return (
        <div>
            <BrowserRouter>
                <div class="top_part">
                    <h1>The Leonardo de Farias Blog</h1>
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/jokes">Jokes</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/kitchen">Kitchen</Link>
                </div>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
                <Routes>
                    <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                    <Route path="/jokes" element={<MyJokes />} />
                    <Route path="/kitchen" element={<Kitchen />}></Route>
                </Routes>   
            </BrowserRouter>


        </div>
    );
}

export default MyHome