import Headshot from "../../../assets/Pictures/Landon-Tardiff-sq.jpg";
import AboutMePic from "../../../assets/Pictures/AboutMe.png";
import Interests from "../../../assets/Pictures/Interests.jpg";

function AboutMe() {

    return(
        <div className="card bg-base-100 content-card">
            <div className="card-body">
                    <div className="tabs">
                        <a className="tab tab-lifted bg-base-200 border-0 text-4xl h-fit">INTRODUCTION</a>
                        <div className="tab-content bg-base-200 p-10 mb-10 flex flex-row">
                                <img className="w-1/4 h-1/4 rounded-lg shadow-2xl"  src={Headshot}/>
                                <p className="text-3xl px-16 indent-10">
                                    Hi, my name is Landon Tardiff. I'm a software developer based in Oklahoma City, Oklahoma and have an immense amount of passion for the field. I love to learn and am always willing to take an opportunity to expand my knowledge of developing software and applications.
                                    I graduated from Francis Tuttle Technology Center on the Rockwell campus in Programming and Software Development program (2023) as well as their Computer Science Academy (2021).
                                    I now have just under a year of professional experience as a developer and am always looking for new opportunities to grow as a person and a developer. 
                                    If you're looking for someone who is a self starter, learns quickly and eagerly, love's to meet new people, and knows how to get stuff done, take a look at my contact page and send me an email, text, or message on LinkedIn!
                                </p>
                        </div>
                    </div>
                    
                    <div className="tabs">
                        <a className="tab tab-lifted bg-base-200 border-0 text-4xl h-fit ml-auto">ABOUT ME</a>
                        <div className="tab-content bg-base-200 p-10 mb-10 flex flex-row">
                                <p className="text-3xl px-16 indent-10">
                                    I was born on August 22nd, 2003 in Oklahoma City, Oklahoma to a loving family and community. I've been raised to always care for others and to do the right thing, principles that I hold at the core of my being to this day. 
                                    I pride myself on who I am and who I've become and I try to do my best to show that through how I talk and how I present myself to others and even myself. I first discovered my love for software development in sophomore year of high school when I enroll in Francis Tuttle's Computer Science Academy and haven't looked back since. 
                                    Im always eager and excited to hear about and work with the newest and brightest advancements in the industry and take pride in that excitement. Just like my love for learning about new technologies, I'm also just as eager to learn about and meet new people and share myself and my experiences with them. 
                                </p>
                                <img className="w-1/4 h-1/4 rounded-lg shadow-2xl"  src={AboutMePic}/>
                        </div>
                    </div>

                    <div className="tabs">
                        <a className="tab tab-lifted bg-base-200 border-0 text-4xl h-fit">WHAT I LIKE TO DO</a>
                        <div className="tab-content bg-base-200 p-10 mb-10 flex flex-row">
                            <img className="w-1/4 h-1/4 rounded-lg shadow-2xl"  src={Interests}/>
                            <p className="text-3xl px-16 indent-10">
                                I have a few hobbies I like to apply myself to, for betterment of myself, or even just to relax after a long day. One of the biggest hobbies, and at this point passions, I have is playing music. I love to perform and even just sit and learn new songs or techniques. I mainly play the bass guitar, but I also am branching out and expanding my repetoire to electric guitar and drums as well!
                                I love to play video games, in fact it's the main reason I even persued software development in the first place. The process of creating a video game is something I'm not a stranger to, so getting play new titles and experience more fresh ideas is always something I enjoy doing.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AboutMe;