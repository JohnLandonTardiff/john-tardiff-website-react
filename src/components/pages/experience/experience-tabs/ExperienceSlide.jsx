function ExperienceSlide(props) {

    function displaySlideButtons() {
        if(props.firstSlide) {
            return(
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
                    <a href={"#slide" + (props.slideNumber + 1)} className="btn btn-circle">❯</a>
                </div>
            );
        }
        if(props.lastSlide) {
            return(
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/2">
                    <a href={"#slide" + (props.slideNumber - 1)} className="btn btn-circle">❮</a> 
                </div>
            );
        }

        return(
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={"#slide" + (props.slideNumber - 1)} className="btn btn-circle">❮</a> 
                <a href={"#slide" + (props.slideNumber + 1)} className="btn btn-circle">❯</a>
            </div>
        );
    }

    return(
        <div id={"slide" + props.slideNumber} className="carousel-item relative w-full">
        <div>
            {props.children}
        </div>
        {
            displaySlideButtons()
        }
    </div>
    )
}

export default ExperienceSlide;