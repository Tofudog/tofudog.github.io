import "../styles/Project.css";
import github_logo from "../assets/images/github_logo.jpeg";

import jsonData from '../data/projects.json';

const loadData = () => JSON.parse(JSON.stringify(jsonData));

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
                    <h4 class="project-text">Number of likes: {numStars}</h4>
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
    //make projects.json
    const description = "Chrome extension where Leetcode users battle against each other!";
    return ProjectOutline("https://github.com/Tofudog/Yeetcode", github_logo, 12, "Yeetcode", description);
}

function TestComponent(selectedComponent) {
    return selectedComponent;
}

export {TestComponent, ProjectComponent};
