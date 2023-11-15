import Headshot from "../../../assets/Pictures/Landon-Tardiff-sq.jpg";

function AboutMe() {

    return(
        <div className="card bg-base-100 content-card">
            <div className="card-body text-3xl indent-10">
            <div>

            </div>
            <div className="block">
                <img src={Headshot} className="w-1/5 float-right" />
                <p className="pb-10">Hi, my name is Landon Tardiff. I'm a software developer based in Oklahoma City, Oklahoma and have an immense amount of passion for the field. I love to learn and am always willing to take an opportunity to expand my knowledge of developing software and applications.</p>
                <p className="pb-10">I was born on August 22nd, 2003 and have just under a year of professional experience as a developer. I graduated from Francis Tuttle Technology Center on the Rockwell campus in Programming and Software Development program as well as their Computer Science Academy.</p>
                <p className="pb-10">I've been programming since I was a sophmore in highschool in 2018. I enrolled in Francis Tuttle's Computer Science Academy and fell in love with computers and the process of creating programs and software. Ever since I started programming I've never looked back and strive everyday to learn more and to become a better developer.</p>
                <p className="pb-10">I have a lot of hobbies that I like to use to destress after I am finished working for the day. I love to play music, I play the bass guitar, electric guitar, and the drums, I play video games, which is where my love for software development began, and sometimes I just like to talk to my friends and hang out with them.</p>
                <p>If you're looking for someone who is a self starter, learns quickly and eagerly, love's to meet new people, and knows how to get stuff done, take a look at my contact page and send me an email, text, or message on LinkedIn!</p>
            </div>
                
            </div>
        </div>
    )
}

export default AboutMe;