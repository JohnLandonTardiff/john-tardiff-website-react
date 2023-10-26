import { useState } from "react";
import "./Experience.css"

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

    return(
        <div className="experience-container">
            <div className="tabs">
                <a id="tab1" className="tab tab-lifted bg-base-300 tab-active" onClick={() => selectTab(1)}>Work Experience</a>
                <a id="tab2" className="tab tab-lifted bg-base-300" onClick={() => selectTab(2)}>Certifications</a>
                <a id="tab3" className="tab tab-lifted bg-base-300" onClick={() => selectTab(3)}>Web Apps</a>
                <a id="tab4" className="tab tab-lifted bg-base-300" onClick={() => selectTab(4)}>Unity Games</a>
                <a id="tab5" className="tab tab-lifted bg-base-300" onClick={() => selectTab(5)}>Console Apps</a>
                <a id="tab6" className="tab tab-lifted bg-base-300" onClick={() => selectTab(6)}>Competitions</a>
            </div>
            <div className="card bg-base-100 experience-card">
                <div className="card-body">

                </div>
            </div>
        </div>
    )
}

export default Experience;