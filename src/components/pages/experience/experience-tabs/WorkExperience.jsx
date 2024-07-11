import ExperienceSlide from "./ExperienceSlide";

function WorkExperience() {
    return(
        <div className="carousel carousel-center w-full experience-carousel">
            <ExperienceSlide slideNumber={1} firstSlide>
                <h2 className="card-title text-3xl">Junior Software Developer - Pacesetter Claims</h2>
                <h3 className="text-3xl">December 2023 to July 2024</h3>
                <ul className="list-disc pl-5">
                    <li><p className="text-2xl">Used Blazor, SQL Server, and Microsoft Azure to build and improve an application used by insurance claims adjusters to track time and claims</p></li>
                    <li><p className="text-2xl">Used End to End, integration, and unit testing techniques to maintain and secure multiple facets of a large application</p></li>
                    <li><p className="text-2xl">Used Mediatr and Entity Framework to modularize and automate database access and control</p></li>
                    <li><p className="text-2xl">Created Azure CI/CD Pipelines for deploying web application environments</p></li>
                </ul>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={2}>
                <h2 className="card-title text-3xl">Junior Software Developer - amshot</h2>
                <h3 className="text-3xl">May 2023 to December 2023</h3>
                <ul className="list-disc pl-5">
                    <li><p className="text-2xl">Used C#, Javascript, HTML, CSS, SQL Server, React, ASP.NET MVC, and Angular to create and maintain applications used by clients</p></li>
                    <li><p className="text-2xl">Worked on multiple client projects simultaneously, balancing workload and shifting priorities</p></li>
                    <li><p className="text-2xl">Used Agile principles to manage time between multiple clients to ensure deadlines and expectations were met</p></li>
                </ul>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={3} lastSlide>
            <h2 className="card-title text-3xl">Summer 2022 It Intern - Devon Energy</h2>
                <h3 className="text-3xl">May 2022 to August 2022</h3>
                <ul className="list-disc pl-5">
                    <li><p className="text-2xl">Used Angular, .Net, and SQL to add features and fix bugs to a work order portal used by all on-site oil rig operators</p></li>
                    <li><p className="text-2xl">Gained experience working on a large scale application that uses multiple different interconnected technologies and systems</p></li>
                    <li><p className="text-2xl">Participated in volunteer work relating to STEM</p></li>
                    <li><p className="text-2xl">Collaborated with a team to ensure a quality application was being produced</p></li>
                    <li><p className="text-2xl">Exposed to multiple facets of the oil and gas industry</p></li>
                    <li><p className="text-2xl">Made connections and attended social events within the company</p></li>
                </ul>
            </ExperienceSlide>
        </div>
    )
}

export default WorkExperience;