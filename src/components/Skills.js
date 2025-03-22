import "../styles/Project.css";
import jsonData from '../data/skills.json';

function SkillsOutline(skills, color) {
    return <>
        <ul>
            {skills.map((item, index) => (
                <li style={{ color: color }}>{item}</li>
            ))}
            <br></br><br></br>
        </ul>
    </>
}

function SkillsComponent() {
    let componentList = [];
    const techSkills = jsonData.Skills.tech;
    const personalSkills = jsonData.Skills.personal;
    componentList.push(SkillsOutline(techSkills, "red"));
    componentList.push(SkillsOutline(personalSkills, "yellow"));
    return (
        <div>
            {componentList.map((item) => (
                <div>{item}</div>
            ))}
        </div>
      );
}

export default SkillsComponent;
