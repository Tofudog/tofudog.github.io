import "../styles/Project.css";
import jsonData from '../data/experiences.json';

function ExperienceOutline(company, location, position, description, dates, tech) {
    return <>
        <div class="box">
            <div id="left">
                <h2>{company}</h2>
                <h4>@ {location}</h4>
                <h5>From {dates[0]} to {dates[1]}</h5>
                <h4>{description}</h4>
            </div>
            <div id="right">
                {/* put in the logo image */}
                <h3>bruh</h3>
            </div>
        </div>
    </>
}

function ExperienceComponent() {
    const experienceSize = jsonData.Experiences.length;
    let componentList = [];
    for (var i=0; i<experienceSize; i++) {
        const curExperience = jsonData.Experiences[i];
        const company = curExperience.company;
        const location = curExperience.location;
        const position = curExperience.position;
        const description = curExperience['what-i-did'];
        const dates = curExperience.dates;
        const tech = curExperience.tech;
        componentList.push(ExperienceOutline(company, location, position, description, dates, tech));
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
