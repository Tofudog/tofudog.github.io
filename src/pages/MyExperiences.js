import React from 'react';
import jsonData from '../data/experiences.json';

function ExperienceComponent(experience) {
    console.log(experience);
    return <>
        <div class="standout-box">
            <img class="company-logo" src={experience.logo}></img>
            <p>
                {experience.dates[0]} - {experience.dates[1]}
            </p>
            <p>
                {experience.description}
            </p>
        </div>
    </>
}

function MyExperiences() {
    let componentList = [];
    const experiences = jsonData.experiences;
    for (var i=0; i<experiences.length; i++) {
        componentList.push(ExperienceComponent(experiences[i]));
    }
    return <>
        <div>
            <h1>Experiences</h1>
            <div class="flex-container">
                {componentList.map((item, index) => (
                    <React.Fragment id="flex-item" key={index}>
                        <div>{item}</div>
                        <div id="special-space"></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </>
}

export default MyExperiences;
