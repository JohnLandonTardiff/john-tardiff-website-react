import ResumePDF from "../../../assets/Resume-John-Tardiff-Software.pdf";
import { Document, Page } from "react-pdf";

function Resume() {
    
    return(
        <div className="card bg-base-100 content-card">
            <div className="card-body">
                <object data={ResumePDF} className="h-full w-1/2 m-auto"/>
            </div>
        </div>
    )
}

export default Resume;