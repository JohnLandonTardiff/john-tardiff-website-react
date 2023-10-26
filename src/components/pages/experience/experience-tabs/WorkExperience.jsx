import ExperienceSlide from "./ExperienceSlide";

function WorkExperience() {
    return(
        <>
            <ExperienceSlide slideNumber={1} firstSlide>
                <div>Slide 1</div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={2}>
                <div>Slide 2</div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={3}>
                <div>Slide 3</div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={4}>
                <div>Slide 4</div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={5} lastSlide>
                <div>Slide 5</div>
            </ExperienceSlide>
        </>
    )
}

export default WorkExperience;