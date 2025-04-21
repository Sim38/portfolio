import CircleIcon from "~/components/cirlce_icon";
import SocialContainer from "~/components/social_container";
import LinkedinIcon from "public/assets/LinkedIn_icon.svg";
import TagBlock from "~/components/tag_block";
import { Fragment } from "react/jsx-runtime";
import CaretOvertype from "~/components/caret_overtype";
import ProfilePic from "/assets/profile.jpg";

const socials = [
  {
    name: "LinkedIn",
    link: "https://sg.linkedin.com/in/sim-jun-hong",
  },
  {
    name: "GitHub",
    link: "https://github.com/Sim38",
  },
  {
    name: "Email",
    link: "mailto:simjunhong38@gmail.com",
  },
];

export default function About() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <UserSection />
      <AboutSection />
    </div>
  );
}

const UserSection = () => {
  return (
    <div className="container @container">
      <div className="flex flex-col items-center justify-center text-center @md:text-start @md:flex-row @md:gap-8 gap-4">
        <CircleIcon className="h-50 w-50" src={ProfilePic} />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-4xl sm:text-5xl">Sim Jun Hong</span>
          <p className="max-w-sm text-accent-2">
            Software Developer / Fullstack Developer
          </p>
          <SocialsSection />
        </div>
      </div>
    </div>
  );
};

const SocialsSection = () => {
  return (
    <div className="flex flex-row my-1 justify-center sm:justify-start">
      {socials.map((social, index) => {
        return (
          <Fragment key={social.name}>
            <a
              href={social.link}
              className="hover:text-accent-1 hover:underline"
            >
              {social.name}
            </a>
            {index < socials.length - 1 && <p className="mx-2">•</p>}
          </Fragment>
        );
      })}
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="sm:max-w-2xl sm:my-16 my-6 text-xl">
      <TagBlock tagName="about">
        <div>
          I'm a developer passionate about solving problems through code — which
          really is just a fancy way of saying "I enjoy spending more time
          over-engineering a solution than doing the task manually".
        </div>
        <div className="mt-6">
          Which has admitedly costed me hundreds if not thousands of hours that
          I'm never gonna get back — not that I would want to anyways. Cause it
          is in those "wasted" hours that has allowed to to step out of my
          comfort zone and tried so much more new stuff I wouldn't have
          otherwise, and in fact, this is how I got my start in programming in
          the first place. <CaretOvertype className="ml-1" />
        </div>
      </TagBlock>

      <TagBlock tagName="skills" className="mt-8">
        <p className="underline">Languages</p>
        <p>Typescript, Javascript, Python, Dart, Kotlin, C, C++, Java, SQL</p>
        <p className="underline mt-6">Frameworks</p>
        <p>React, Tailwind, Bootstrap, Express, Flutter, Django, Flask</p>
      </TagBlock>

      <TagBlock tagName="education" className="mt-8">
        <p className="underline">Singapore Polytechnic</p>
        <p>Diploma in Computing Engineering</p>
        <p className="underline mt-6">
          University of Glasgow & Singapore Institute of Technology
        </p>
        <p>2nd Year in Computer Science</p>
      </TagBlock>
    </div>
  );
};
