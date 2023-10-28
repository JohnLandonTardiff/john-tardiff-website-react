import ExperienceSlide from "./ExperienceSlide";
import YSGameDevCert from "../../../../assets/YSGameDevCert.png";
import YSGameDevScore from "../../../../assets/YSGameDevScore.png";
import YSCompProCert from "../../../../assets/YSCompProCert.png";
import YSCompProScore from "../../../../assets/YSCompProScore.png";
import YSCSICert from "../../../../assets/YSCSICert.png";
import YSCSIScore from "../../../../assets/YSCSIScore.png";
import YSCSIICert from "../../../../assets/YSCSIICert.png";
import YSCSIIScore from "../../../../assets/YSCSIIScore.png";
import YSJavaICert from "../../../../assets/YSJavaICert.png";
import YSJavaIScore from "../../../../assets/YSJavaIScore.png";
import YSJavaIICert from "../../../../assets/YSJavaIICert.png";
import YSJavaIIScore from "../../../../assets/YSJavaIIScore.png";
import CPUnityCert from "../../../../assets/CPUnityCert.png";
import CPUnityScore from "../../../../assets/CPUnityScore.png";
import CPDatabasesCert from "../../../../assets/CPDatabasesCert.png";
import CPDatabasesScore from "../../../../assets/CPDatabasesScore.png";
import CPJavaCert from "../../../../assets/CPJavaCert.png";
import CPJavaScore from "../../../../assets/CPJavaScore.png";
import CPHTMLCert from "../../../../assets/CPHTMLCert.png";
import CPHTMLScore from "../../../../assets/CPHTMLScore.png";
import CPJSCert from "../../../../assets/CPJavascriptCert.png";
import CPJSScore from "../../../../assets/CPJavascriptScore.png";


function Certifications() {
    return(
        <div className="carousel carousel-center w-full experience-carousel">
            <ExperienceSlide slideNumber={1} firstSlide>
                <h2 className="card-title text-3xl">YouScience - Game Development Fundamentals</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={YSGameDevCert} alt="YouScience Game Dev Certification" /></figure>
                    <figure className="w-1/2"><img src={YSGameDevScore} alt="YouScience Game Dev Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={2}>
                <h2 className="card-title text-3xl">YouScience - Computer Programming I</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={YSCompProCert} alt="YouScience Computer Programming Certification" /></figure>
                    <figure className="w-1/2"><img src={YSCompProScore} alt="YouScience Computer Programming Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={3}>
                <h2 className="card-title text-3xl">YouScience - Computer Programming IB C#</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={YSCSICert} alt="YouScience C# IB Certification" /></figure>
                    <figure className="w-1/2"><img src={YSCSIScore} alt="YouScience C# IB Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={4}>
                <h2 className="card-title text-3xl">YouScience - Computer Programming II C#</h2>
                <div className="flex justify-center gap-10">
                <figure className="w-1/2"><img src={YSCSIICert} alt="YouScience C# II Certification" /></figure>
                    <figure className="w-1/2"><img src={YSCSIIScore} alt="YouScience C# II Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={5}>
                <h2 className="card-title text-3xl">YouScience - Computer Programming IB Java</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={YSJavaICert} alt="YouScience Java IB Certification" /></figure>
                    <figure className="w-1/2"><img src={YSJavaIScore} alt="YouScience Java IB Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={6}>
                <h2 className="card-title text-3xl">YouScience - Computer Programming II Java</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={YSJavaIICert} alt="YouScience Java II Certification" /></figure>
                    <figure className="w-1/2"><img src={YSJavaIIScore} alt="YouScience Java II Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={7}>
                <h2 className="card-title text-3xl">Certiport - Unity Certified User: Programmer</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={CPUnityCert} alt="CertiPort Unity Programmer Certification" /></figure>
                    <figure style={{width: '30%'}}><img src={CPUnityScore} alt="CertiPort Unity Programmer Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={8}>
                <h2 className="card-title text-3xl">Certiport - Information Technology Specialist: Databases</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={CPDatabasesCert} alt="CertiPort Databases Certification" /></figure>
                    <figure style={{width: '30%'}}><img src={CPDatabasesScore} alt="Certiport Databases Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={9}>
                <h2 className="card-title text-3xl">Certiport - Information Technology Specialist: Java</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={CPJavaCert} alt="CertiPort Java Certification" /></figure>
                    <figure style={{width: '30%'}}><img src={CPJavaScore} alt="Certiport Java Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={10}>
                <h2 className="card-title text-3xl">Certiport - Information Technology Specialist: HTML and CSS</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={CPHTMLCert} alt="CertiPort HTML and CSS Certification" /></figure>
                    <figure style={{width: '30%'}}><img src={CPHTMLScore} alt="Certiport HTML and CSS Score" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={11} lastSlide>
                <h2 className="card-title text-3xl">Certiport - Information Technology Specialist: JavaScript</h2>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={CPJSCert} alt="CertiPort JavaScript Certification" /></figure>
                    <figure style={{width: '30%'}}><img src={CPJSScore} alt="Certiport JavaScript Score" /></figure>
                </div>
            </ExperienceSlide>
        </div>
    );
}

export default Certifications;