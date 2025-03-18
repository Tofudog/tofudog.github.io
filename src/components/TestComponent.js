import "../styles/Project.css";
import github_logo from "../assets/images/github_logo.jpeg";

function ProjectOutline(projectLink, projectImage, numStars, title, description) {
    return <>
        <div class="box">
            <div class="side_by_side">
                <div>
                <a href={projectLink} target="_blank">
                    {/* Obviously change this logo to be project image */}
                    <img src={projectImage} />
                </a>
                </div>
                <div>
                    {/* Later do Github and/or Chrome Store api request*/}
                    <h4>Number of likes: {numStars}</h4>
                </div>
            </div>
            <div>
                <div>
                    <h4>{title}</h4>
                </div>
                <div>
                    <h5>
                        {description}
                    </h5>
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
