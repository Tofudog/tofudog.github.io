import "../styles/Project.css";
import github_logo from "../assets/images/github_logo.jpeg";

import jsonData from '../data/projects.json';

function ProjectOutline(title, description, stars) {
    return <>
        <div id="command-project-box">
            <p>{title}</p>
            <p>{description}</p>
            <p>Number of stars: {stars}</p>
        </div>
        <br></br><br></br><br></br>
    </>
}

function ProjectComponent() {
    const projectSize = jsonData.projects.length;
    let componentList = [];
    for (var i=0; i<projectSize; i++) {
        const curProject = jsonData.projects[i];
        const title = curProject.title;
        const description = curProject.description;
        const stars = curProject.numStars;
        componentList.push(ProjectOutline(title, description, stars));
    }
    return (
        <div>
            {componentList.map((item) => (
                <div>{item}</div>
            ))}
        </div>
      );
}

function ClearScreenComponent() {
    return <></>
}

function TestComponent() {
    return <>
        <h2>
            I cleared the screen!
        </h2>
    </>
}

export {TestComponent, ProjectComponent, ClearScreenComponent};
