import "../styles/Project.css";
import jsonData from '../data/skills.json';

const MALLOW_SRC = "https://media.tenor.com/9EWlRwyQ-2wAAAAj/super-mario-super-mario-rpg.gif";

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
    const personalSkills = jsonData.Skills.personal;
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
