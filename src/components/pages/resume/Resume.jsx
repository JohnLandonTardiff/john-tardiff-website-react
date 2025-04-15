import ResumePDF from "../../../assets/Resume/ResumePDF.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


function Resume() {

    return(
        <div className="card bg-base-100 content-card w-fit m-auto">
            <div className="card-body m-auto px-48">
                <a className="btn text-xl m-auto px-10" href="/src/assets/resume/ResumePDF.pdf" download>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Download Resume
                </a>
                <Document file={ResumePDF}>
                    <Page pageNumber={1} scale={1.5}></Page>
                    <Page pageNumber={2} scale={1.5}></Page>
                </Document>

            </div>
        </div>
    )
}

export default Resume;