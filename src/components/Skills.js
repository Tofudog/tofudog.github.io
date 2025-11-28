import "../styles/Project.css";
import jsonData from '../data/skills.json';

function SkillsOutline(skill) {
    return <>
        <div id="command-project-box">
            {skill}
        </div>
        <br></br><br></br><br></br>
    </>
}

function SkillsComponent() {
    let componentList = [];
    const techSkills = jsonData.Skills.tech;
    for (const skill of techSkills) {
        componentList.push(SkillsOutline(skill));
    }
    return (
        <div>
            <div>
                {componentList.map((item) => (
                    <div>{item}</div>
                ))}
            </div>
        </div>
      );
}

export default SkillsComponent;