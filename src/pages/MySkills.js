import React from 'react';
import jsonData from '../data/myskills.json';

function SkillComponent(curSkills) {
    let curList = [];
    for (var i=0; i<curSkills.length; i++) {
        const id = curSkills[i][0];
        const name = curSkills[i][1];
        const url = curSkills[i][2];

        if (i === 0) {
            curList.push(
                <div>
                    <div>
                        <img class="skill-image" src={url} />
                        <h3 class="middle-text">{name}</h3>
                    </div>
                </div>
            );
        }
        else {
            curList.push(
                <div class="flex-item">
                    <div>
                        <img class="skill-image" src={url} />
                        <h3 class="middle-text">{name}</h3>
                    </div>
                </div>
            );
        }
    }
    return <>
        <div class="flex-container">
            {curList.map((item, index) => (
                <React.Fragment key={index}>
                    <div>{item}</div>
                </React.Fragment>
            ))}
        </div>
    </>
}

function MySkills() {
    const keys = Object.keys(jsonData);
    let componentList = [];
    keys.forEach(skillType => {
        //add current row of skills
        const curSkills = jsonData[skillType];
        componentList.push(SkillComponent(curSkills));
    });
    return <>
        <div>
            {componentList.map((item, index) => (
                <React.Fragment key={index}>
                    <div>{item}</div>
                    <br></br><br></br><br></br><br></br>
                </React.Fragment>
            ))}
        </div>
    </>
}

export default MySkills;
