import React from 'react';
import jsonData from '../data/projects.json';

function ProjectComponent(project) {
    return <>
        <div class="standout-box">
            <h2>{project.title}</h2>
            <h3>{project.description}</h3>
            <div class="flex-container">
                {
                    project.url !== "none" &&
                    <div class="flex-container">
                        <a target="_blank" href={project.url}><h4>url</h4></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                }
                <a target="_blank" href={project.src}>code</a>
            </div>
        </div>
    </>
}

function MyProjects() {
    let componentList = [];
    const projects = jsonData.projects;
    for (var i=0; i<projects.length; i++) {
        componentList.push(ProjectComponent(projects[i]));
    }
    return <>
        <div>
            <div class="flex-container">
                {componentList.map((item, index) => (
                    <React.Fragment id="flex-item" key={index}>
                        <div>{item}</div>
                        {/* <div id="special-space"></div> */}
                    </React.Fragment>
                ))}
            </div>
        </div>
    </>
}

export default MyProjects;
