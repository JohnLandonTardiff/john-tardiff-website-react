import { useEffect, useState } from "react";
import "./Experience.css"
import WorkExperience from "./experience-tabs/WorkExperience";
import Certifications from "./experience-tabs/Certifications";
import WebApps from "./experience-tabs/WebApps";
import UnityGames from "./experience-tabs/UnityGames";
import ConsoleApps from "./experience-tabs/ConsoleApps";
import Competitions from "./experience-tabs/Competitions";

function Experience() {
    const [activeTab, changeTab] = useState(1);

    function selectTab(value) {
        if(activeTab == value) return;
        const oldTab = document.getElementById("tab" + activeTab);
        const newTab = document.getElementById("tab" + value);
        oldTab.classList.remove("tab-active");
        newTab.classList.add("tab-active");
        changeTab(value);
    }

    useEffect(() => {
        document.getElementById("tab" + activeTab).classList.add("tab-active");
    }, [])

    function displayTab() {
        switch(activeTab) {
            case 1:
                return <WorkExperience />;
            case 2:
                return <Certifications />;
            case 3:
                return <WebApps />;
            case 4:
                return <UnityGames />;
            case 5:
                return <ConsoleApps />;
            case 6:
                return <Competitions />;
            default:
                selectTab(1);
        }
    }

    return(
        <div className="experience-container">
            <div className="tabs">
                <a id="tab1" className="tab tab-lifted bg-base-300" onClick={() => selectTab(1)}>Work Experience</a>
                <a id="tab2" className="tab tab-lifted bg-base-300" onClick={() => selectTab(2)}>Certifications</a>
                <a id="tab3" className="tab tab-lifted bg-base-300" onClick={() => selectTab(3)}>Web Apps</a>
                <a id="tab4" className="tab tab-lifted bg-base-300" onClick={() => selectTab(4)}>Unity Games</a>
                <a id="tab5" className="tab tab-lifted bg-base-300" onClick={() => selectTab(5)}>Console Apps</a>
                <a id="tab6" className="tab tab-lifted bg-base-300" onClick={() => selectTab(6)}>Competitions</a>
            </div>
            <div className="card bg-base-100 experience-card">
                <div className="card-body">
                    {displayTab()}
                </div>
            </div>
        </div>
    )
}

export default Experience;