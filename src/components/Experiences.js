import "../styles/Project.css";
import jsonData from '../data/experiences.json';

function ExperienceOutline(company, location, position, description) {
    return <>
        <div id="command-project-box">
            <p>Company: {company}</p>
            <p class="baby-text">Location: {location}</p>
            <p class="baby-text">Position: {position}</p>
            <p>Description: {description}</p>
        </div>
        <br></br><br></br><br></br>
    </>
}

function ExperienceComponent() {
    const experienceSize = jsonData.experiences.length;
    let componentList = [];
    for (var i=0; i<experienceSize; i++) {
        const curExperience = jsonData.experiences[i];
        const company = curExperience.company;
        const location = curExperience.location;
        const position = curExperience.position;
        const description = curExperience.description;
        componentList.push(ExperienceOutline(company, location, position, description));
    }
    return (
        <div>
            {componentList.map((item) => (
                <div>{item}</div>
            ))}
        </div>
      );
}

export default ExperienceComponent;
