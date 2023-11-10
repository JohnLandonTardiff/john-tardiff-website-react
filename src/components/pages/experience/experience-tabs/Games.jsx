import ExperienceSlide from "./ExperienceSlide";
import "./Games.css";
import BeatBlocker1 from "../../../../assets/Games/BeatBlocker-cap1.png";
import BeatBlocker2 from "../../../../assets/Games/BeatBlocker-cap2.png";
import BotBeatdown1 from "../../../../assets/Games/BotBeatdown-cap1.png";
import BotBeatdown2 from "../../../../assets/Games/BotBeatdown-cap2.png";
import SuperPowerScuffle1 from "../../../../assets/Games/SuperPowerScuffle-cap1.png";
import SuperPowerScuffle2 from "../../../../assets/Games/SuperPowerScuffle-cap2.png";
import TempoTantrum1 from "../../../../assets/Games/TempoTantrum-cap1.png";
import TempoTantrum2 from "../../../../assets/Games/TempoTantrum-cap2.png";

function Games() {
    return (
        <div className="carousel carousel-center w-full experience-carousel">
            <ExperienceSlide slideNumber={1} firstSlide>
                <div className="flex">
                    <h2 className="card-title text-3xl">Beat Blocker</h2>
                    <a href="https://lanyardsoft.itch.io/beat-blocker" target="_blank">
                        <svg className="itch-link" fill="#535bf2" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
                        </svg>
                    </a>
                </div>
                <h3 className="text-3xl">Unity</h3>
                <p>
                    Beat Blocker was the final project for my game design course in school. Beat Blocker is a rythm game where you have to block our heart from lines to the rhythm of the song! Your score is determined by how accurate you hit the lines coming towards you to the beat of the song as well as how many lines in a row you hit.
                    <br />
                    Some notable features of the game include:
                </p>
                <ul className="list-disc pl-5">
                    <li><p>Functionality to read a midi file provided to the game and convert it to a level to play</p></li>
                    <li><p>Custom control settings that are saved by the game</p></li>
                    <li><p>Saving and loading player data for scores on each level</p></li>
                </ul>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={BeatBlocker1} alt="Beat Blocker Screenshot 1" /></figure>
                    <figure className="w-1/2"><img src={BeatBlocker2} alt="Beat Blocker Screenshot 2" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={2}>
                <div className="flex">
                    <h2 className="card-title text-3xl">Bot Beatdown</h2>
                    <a href="https://lanyardsoft.itch.io/bot-beatdown" target="_blank">
                        <svg className="itch-link" fill="#535bf2" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
                        </svg>
                    </a>
                </div>
                <h3 className="text-3xl">Unity</h3>
                <p>
                    Bot Beatdown was the second game that was created in collaboration with other students in school for a group of second graders at a local elementary school. The game is a simple beat 'em up where you control 1 of 4 super heroes to defeat multiple levels of evil robots attacking a city.
                    <br />
                    Some notable features of this game include:
                </p>
                <ul className="list-disc pl-5">
                    <li><p>The game was created to function on both mobile and desktop</p></li>
                    <li><p>The music in the game was original, created by me and other students working on the project</p></li>
                    <li><p>The game is a unity webGL game, meaning it is played within the browser</p></li>
                </ul>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={BotBeatdown1} alt="Bot Beatdown Screenshot 1" /></figure>
                    <figure className="w-1/2"><img src={BotBeatdown2} alt="Bot Beatdown Screenshot 2" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={3}>
                <div className="flex">
                    <h2 className="card-title text-3xl">Super Power Scuffle</h2>
                    <a href="https://lanyardsoft.itch.io/super-power-scuffle" target="_blank">
                        <svg className="itch-link" fill="#535bf2" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
                        </svg>
                    </a>
                </div>
                <h3 className="text-3xl">Unity</h3>
                <p>
                    Super Power Scuffle was the first game that was created in collaboration with other students in school for a group of seconds gradeers at a local elementary school. The game is an endless runner where you play as a super hero and dodge and destroy robots coming at you, collect power ups, and try to survive as long as you can
                    <br />
                    Some notable features of this game include:
                </p>
                <ul className="list-disc pl-5">
                    <li><p>The game features a character creator where you can select the colors of your super suit, pick a hair style, and select one of 4 powers</p></li>
                    <li><p>The assets created for the game were all original and created by other students on team including music, art, and animation</p></li>
                    <li><p>The game was created in about 2 weeks, and despite having short deadline, the game was able to be created and playable!</p></li>
                </ul>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={SuperPowerScuffle1} alt="Super Power Scuffle Screenshot 1" /></figure>
                    <figure className="w-1/2"><img src={SuperPowerScuffle2} alt="Super Power Scuffle Screenshot 2" /></figure>
                </div>
            </ExperienceSlide>
            <ExperienceSlide slideNumber={4} lastSlide>
                <div className="flex">
                    <h2 className="card-title text-3xl">Tempo Tantrum</h2>
                    <a href="https://lanyardsoft.itch.io/tempo-tantrum" target="_blank">
                        <svg className="itch-link" fill="#535bf2" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
                        </svg>
                    </a>
                </div>
                <h3 className="text-3xl">Unity</h3>
                <p>
                   Tempo Tantrum is a game that was created as a personal project to try and combine two of my favorite video game genres, fighting games and rhythm games. The game is a cross between these 2 genres, and consists of fighting your opponent based on a rock paper scissors system, to the beat of the music.
                    <br />
                    Some notable features of this game include:
                </p>
                <ul className="list-disc pl-5">
                    <li><p>The game's assets, other than music and the title screen font, were all created by me.</p></li>
                    <li><p>The game uses a midi file to create the rhythm system of the gameplay</p></li>
                    <li><p>The game has a system for changing your controls that even supports console controllers!</p></li>
                </ul>
                <div className="flex justify-center gap-10">
                    <figure className="w-1/2"><img src={TempoTantrum1} alt="Tempo Tantrum Screenshot 1" /></figure>
                    <figure className="w-1/2"><img src={TempoTantrum2} alt="Tempo Tantrum Screenshot 2" /></figure>
                </div>
            </ExperienceSlide>
        </div>
    )
}


export default Games;