import "../styles/Project.css";
import github_logo from "../assets/images/github_logo.jpeg";

import jsonData from '../data/projects.json';

function ProjectOutline(projectLink, projectImage, numStars, title, description) {
    return <>
        <div class="box">
            <div class="side_by_side">
                <div>
                <a href={projectLink} target="_blank">
                    {/* Obviously change this logo to be project image */}
                    <img class="project-image" src={projectImage} />
                </a>
                </div>
                <div>
                    {/* Later do Github and/or Chrome Store api request*/}
                    <h5 class="project-text">Number of likes: {numStars}</h5>
                </div>
            </div>
            <div>
                <div>
                    <h4 class="project-text">{title}</h4>
                </div>
                <div>
                    <h5 class="project-text">{description}</h5>
                </div>
            </div>
        </div>
    </>
}

function ProjectComponent() {
    const projectSize = jsonData.Projects.length;
    let componentList = [];
    for (var i=0; i<projectSize; i++) {
        const curProject = jsonData.Projects[i];
        const projectLink = curProject.projectLink;
        const projectImageLink = curProject.projectImageLink;
        const numStars = curProject.numStars;
        const title = curProject.title;
        const description = curProject.description;
        componentList.push(ProjectOutline(projectLink, projectImageLink, numStars, title, description));
    }
    return (
        <div>
            {componentList.map((item) => (
                <div>{item}</div>
            ))}
        </div>
      );
}

function ExperienceOutline(company, location, position, role, tech) {
    
}

function ExperienceComponent() {

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
