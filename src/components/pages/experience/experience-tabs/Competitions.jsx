import ExperienceSlide from "./ExperienceSlide";
import CSPlaque from "../../../../assets/Competitions/CSPlaque.jpg";
import SQLPlaque from "../../../../assets/Competitions/SQLPlaque.jpg";
import ProgrammingPlaque from "../../../../assets/Competitions/ProgrammingPlaque.jpg";

function Competitions() {
    return(
        <div className="carousel carousel-center w-full experience-carousel">
            <ExperienceSlide slideNumber={1} firstSlide>
                <h2 className="card-title text-3xl">
                    SQL Database Development - 2nd Place
                </h2>
                <h3 className="text-3xl">Business Professionals of America - Nationals 2022</h3>
                <div className="flex justify-center">
                    <figure className="w-1/4"><img src={SQLPlaque} alt="SQL Database Development 2nd Place Plaque" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={2}>
                <h2 className="card-title text-3xl">
                    Computer Programming Concepts - 2nd Place
                </h2>
                <h3 className="text-3xl">Business Professionals of America - Nationals 2023</h3>
                <div className="flex justify-center">
                    <figure className="w-1/4"><img src={ProgrammingPlaque} alt="Computer Programming Concepts 2nd Place Plaque" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={3} lastSlide>
                <h2 className="card-title text-3xl">
                    C# Programming - 1st Place
                </h2>
                <h3 className="text-3xl">Business Professionals of America - Nationals 2023</h3>
                <div className="flex justify-center">
                    <figure className="w-1/4"><img src={CSPlaque} alt="C# Programming 1st Place Plaque" /></figure>
                </div>
            </ExperienceSlide>
        </div>
    )
}

export default Competitions;