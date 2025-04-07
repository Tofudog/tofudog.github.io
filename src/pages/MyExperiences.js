
function ExperienceComponent() {
    return <>
        <div class="standout-box">
            
        </div>
    </>
}

function MyExperiences() {
    return <>
        <div>
            <h1>Experiences</h1>
            <div class="flex-container">
                <div id="flex-item">
                    <ExperienceComponent></ExperienceComponent>
                </div>
                <div id="special-space"></div>
                <div id="flex-item">
                    <ExperienceComponent></ExperienceComponent>
                </div>
                <div id="special-space"></div>
                <div id="flex-item">
                    <ExperienceComponent></ExperienceComponent>
                </div>
            </div>
        </div>
    </>
}

export default MyExperiences;
