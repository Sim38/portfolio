import streamElement from "/assets/projects/image/stream-element.jpg";
import subathonTimer from "/assets/projects/image/subgoal.png";
import electron from "/assets/projects/image/electron-icon.svg";
import electronApp from "/assets/projects/image/electron-app.png";
import myBusz from "/assets/projects/image/mybusz.png";
import birdFlappy from "/assets/projects/image/birdflappy.png";

import myBuszPreview from "/assets/projects/video/myBuszPreview.mp4";

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
    videoSrc: myBuszPreview,
  },
  {
    name: "Bird Flappy",
    description:
      "Mobile Game inspired by Flappy Bird, but instead of tapping to move the bird, we tap to move the pipes.",
    tags: ["Unity", "C#"],
    imageSrc: [birdFlappy],
  },
];
