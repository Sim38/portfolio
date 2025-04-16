import streamElement from "public/assets/projects/stream-element.jpg";
import subathonTimer from "public/assets/projects/subgoal.png";
import electron from "public/assets/projects/electron-icon.svg";
import electronApp from "public/assets/projects/electron-app.png";
import myBusz from "public/assets/projects/mybusz.png";
import birdFlappy from "public/assets/projects/birdflappy.png";

export const projects: Array<Project> = [
  {
    name: "Stream Tools Application",
    description:
      "Software Application used to manage streamer's twitch account, along with their other stream tools, and stream widgets.",
    tags: ["Electron", "NodeJS", "React"],
    imageSrc: [electron],
  },
  {
    name: "Stream Widgets",
    description:
      "Streaming Widgets used by streamers to enhance their streams. Which include Chatbots, Subathon timers, Stream Scheduler and Twitch Extensions.",
    tags: ["NodeJS", "React"],
    imageSrc: [streamElement],
  },
  {
    name: "myBusz",
    description:
      "Mobile Bus Application to check Bus Schedules, Location and Estimated Arrival Time in Malaysia.",
    tags: ["React Native", "Laravel", "SQL"],
    imageSrc: [myBusz],
  },
  {
    name: "Bird Flappy",
    description:
      "Mobile Game inspired by Flappy Bird, but instead of tapping to move the bird, we tap to move the pipes.",
    tags: ["Unity", "C#"],
    imageSrc: [birdFlappy],
  },
];
