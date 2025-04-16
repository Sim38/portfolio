import CircleIcon from "~/components/cirlce_icon";
import SocialContainer from "~/components/social_container";
import LinkedinIcon from "public/assets/LinkedIn_icon.svg";
import TagBlock from "~/components/tag_block";
import { Fragment } from "react/jsx-runtime";

const socials = [
  {
    name: "LinkedIn",
    link: "https://sg.linkedin.com/in/sim-jun-hong",
  },
  {
    name: "GitHub",
    link: "https://github.com/Sim38",
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
    <div className="flex flex-row gap-8">
      <CircleIcon className="h-50 w-50" />
      <div className="flex flex-col justify-center">
        <span className="font-bold text-5xl">Sim Jun Hong</span>
        <p className="max-w-sm text-accent-2">
          Software Developer / Fullstack Developer
        </p>
        <SocialsSection />
      </div>
    </div>
  );
};

const SocialsSection = () => {
  return (
    <div className="flex flex-row my-1">
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
    <div className="w-2xl my-16 text-xl">
      <TagBlock tagName="about">
        <div>
          I'm a developer passionate about solving problems through code — which
          really is just a fancy way of saying "I enjoy spending more time
          over-engineering a solution than doing the task manually".
        </div>

        <div className="mt-6">
          Which has admitedly costed me hundreds if not thousands of hours that
          I'm never gonna get back — not that I would want to anwyays. Cause it
          is in those "wasted" hours that has allowed to to step out of my
          comfort zone and tried so much more new stuff I wouldn't have
          otherwise, and in fact this is how I got into programming in the first
          place.
        </div>
      </TagBlock>
    </div>
  );
};
