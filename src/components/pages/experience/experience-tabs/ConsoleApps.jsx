import ExperienceSlide from "./ExperienceSlide";
import ProjectTrackerConsole1 from "../../../../assets/ConsoleApps/ProjectTrackerConsole-cap1.png";
import ProjectTrackerConsole2 from "../../../../assets/ConsoleApps/ProjectTrackerConsole-cap2.png";

function ConsoleApps() {
    return(
        <div className="carousel carousel-center w-full experience-carousel">
            <ExperienceSlide onlySlide>
                <div className="flex">
                    <h2 className="card-title text-3xl">Project Tracker</h2>
                    <a href="https://github.com/JohnLandonTardiff/ProjectTrackerConsole" target="_blank" className="my-auto ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                </div>
                <h3 className="text-3xl">C#</h3>
                <p className="text-xl">
                    This is a super simple console application that can be used to help track projects and goals within those projects. Written with C# and uses a .txt file, that is saved to and loaded from, to manage the user's data.
                </p>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={ProjectTrackerConsole1} alt="Project Tracker Console Screenshot 1" /></figure>
                    <figure className="w-1/2"><img src={ProjectTrackerConsole2} alt="Project Tracker Console Screenshot 2" /></figure>
                </div>
            </ExperienceSlide>
        </div>
    )
}

export default ConsoleApps;