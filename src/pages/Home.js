import { useState } from "react";

import "./../styles/Home.css"
import NavBar from "./NavBar.js";
import AboutMe from "./AboutMe.js";
import CommandLine from "./CommandLine.js";
import ContactMe from "./ContactMe.js";
import Socials from "./Socials.js";
//import output01 from "../scripts/generate01s.js";

const CircleDiv = ({ size, backgroundColor, borderColor, borderWidth, opacity }) => {
    const circleStyle = {
      width: size,
      height: size,
      borderRadius: '50%',
      border: `${borderWidth}px solid ${borderColor}`,
      backgroundColor: backgroundColor,
      mixBlendMode: "difference"
    };
    return <div style={circleStyle}></div>;
  };

const BlurredBox = ({ children, x, y }) => {
    const style = {
        position: 'absolute',
        left: x,
        top: y
      };
  
    return (
      <div style={style}>
        {children}
      </div>
    );
  };

function Home() {
    //const section = output01();
    const [coord, setCoord] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setCoord({ x: e.screenX, y: e.screenY });
    };

    return <>
        <div onMouseMove={handleMouseMove} class="test-flex-container">
            <div id="test-space"></div>
            <div>
                <NavBar></NavBar>
                <br></br>
                <AboutMe></AboutMe>
                <br></br><br></br>
                <CommandLine></CommandLine>
                <br></br><br></br><br></br>
                <ContactMe></ContactMe>
                <Socials></Socials>
                <br></br><br></br>
            </div>
            <div id="test-space"></div>
            {/* <h1>Mouse coordinates: ({coord.x}, {coord.y})</h1> */}
            <BlurredBox blurRadius={10} x={coord.x-40} y={coord.y-120}>
                <CircleDiv size="200px" backgroundColor="rgba(25, 120, 36, 0.288)" borderWidth="200px"></CircleDiv>
            </BlurredBox>
        </div>
    </>
}

export default Home;