import{w as g}from"./with-props-DaI-xS-Y.js";import{p,l as t,r as c,O as h}from"./chunk-KNED5TY2-9AsnIfpK.js";import{C as v}from"./caret_overtype-BpuDa-YJ.js";const x=[{name:"HOME",link:"/portfolio/"},{name:"PROJECTS",link:"/portfolio/projects"},{name:"ABOUT",link:"/portfolio/about"}];function j({className:e}){const r=p();return t.jsx("nav",{className:`sticky top-0 h-screen flex flex-col justify-center pl-20 ${e}`,children:x.map(n=>t.jsx(N,{tabItem:n,className:"my-8",activePath:r.pathname},n.name))})}const N=({tabItem:e,className:r,activePath:n})=>{const[s,a]=c.useState(!1);return t.jsxs("div",{className:`flex items-center h-[5rem] ${r}`,children:[t.jsx("div",{className:"font-unglitch text-accent-1 text-[5.3rem] tracking-[0.15rem]",children:"~/"}),t.jsxs("a",{href:e.link,className:`group hover:font-glitch hover:text-accent-2 hover:text-[5rem] hover:pb-[0.8rem] ${n===e.link?"font-glitch text-accent-2 text-[5rem] pb-[0.8rem]":"font-unglitch text-accent-1 text-[5.3rem] tracking-[0.15rem]"}`,children:[e.name,t.jsx(v,{className:"ml-1 py-2 group-hover:opacity-100 opacity-0"})]})]})},y=`import CircleIcon from "~/components/cirlce_icon";\r
import SocialContainer from "~/components/social_container";\r
import LinkedinIcon from "public/assets/LinkedIn_icon.svg";\r
import TagBlock from "~/components/tag_block";\r
import { Fragment } from "react/jsx-runtime";\r
import CaretOvertype from "~/components/caret_overtype";\r
\r
const socials = [\r
  {\r
    name: "LinkedIn",\r
    link: "https://sg.linkedin.com/in/sim-jun-hong",\r
  },\r
  {\r
    name: "GitHub",\r
    link: "https://github.com/Sim38",\r
  },\r
  {\r
    name: "Email",\r
    link: "mailto:simjunhong38@gmail.com",\r
  },\r
];\r
\r
export default function About() {\r
  return (\r
    <div className="flex flex-col w-full h-full items-center">\r
      <UserSection />\r
      <AboutSection />\r
    </div>\r
  );\r
}\r
\r
const UserSection = () => {\r
  return (\r
    <div className="flex flex-col items-center text-center sm:text-start sm:flex-row sm:gap-8 gap-4">\r
      <CircleIcon className="h-50 w-50" />\r
      <div className="flex flex-col justify-center">\r
        <span className="font-bold text-4xl sm:text-5xl">Sim Jun Hong</span>\r
        <p className="max-w-sm text-accent-2">\r
          Software Developer / Fullstack Developer\r
        </p>\r
        <SocialsSection />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
const SocialsSection = () => {\r
  return (\r
    <div className="flex flex-row my-1 justify-center sm:justify-start">\r
      {socials.map((social, index) => {\r
        return (\r
          <Fragment key={social.name}>\r
            <a\r
              href={social.link}\r
              className="hover:text-accent-1 hover:underline"\r
            >\r
              {social.name}\r
            </a>\r
            {index < socials.length - 1 && <p className="mx-2">•</p>}\r
          </Fragment>\r
        );\r
      })}\r
    </div>\r
  );\r
};\r
\r
const AboutSection = () => {\r
  return (\r
    <div className="sm:w-2xl sm:my-16 my-6 text-xl">\r
      <TagBlock tagName="about">\r
        <div>\r
          I'm a developer passionate about solving problems through code — which\r
          really is just a fancy way of saying "I enjoy spending more time\r
          over-engineering a solution than doing the task manually".\r
        </div>\r
        <div className="mt-6">\r
          Which has admitedly costed me hundreds if not thousands of hours that\r
          I'm never gonna get back — not that I would want to anwyays. Cause it\r
          is in those "wasted" hours that has allowed to to step out of my\r
          comfort zone and tried so much more new stuff I wouldn't have\r
          otherwise, and in fact this is how I got into programming in the first\r
          place. <CaretOvertype className="ml-1" />\r
        </div>\r
      </TagBlock>\r
\r
      <TagBlock tagName="skills" className="mt-8">\r
        <p className="underline">Languages</p>\r
        <p>Typescript, Javascript, Python, Dart, Kotlin, C, C++, Java, SQL</p>\r
        <p className="underline mt-6">Frameworks</p>\r
        <p>React, Tailwind, Bootstrap, Express, Flutter, Django, Flask</p>\r
      </TagBlock>\r
    </div>\r
  );\r
};\r
`,w=`import portfolioIcon from "public/assets/portfolio_icon.png";
import TagBlock from "~/components/tag_block";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-row items-center">
        <img
          src={portfolioIcon}
          className="object-cover w-32 h-auto aspect-square overflow-hidden rounded-[1rem] border-1 border-secondary"
        />
        <p className="font-unglitch text-7xl ml-6">Welcome</p>
      </div>
      <TagBlock tagName="welcome" className="w-xl text-xl mt-10">
        <p>
          Welcome to my portfolio, this is just a little site to showcase my
          past{" "}
          <a href="/portfolio/projects" className="text-accent-2 underline">
            Projects
          </a>
          , and experiences.
        </p>
        <p className="mt-6">
          This page is created using <u>React</u> and <u>React Router v7</u>{" "}
          Framework and <u>Tailwind v4</u> for css. And most if not all
          components you see here are created by{" "}
          <a href="/portfolio/about" className="text-accent-2 underline">
            me
          </a>
          .
        </p>
        <p className="mt-6">
          If you're wondering, yes the code that is scrolling down in the
          background are the live code for the current page that you are on.
        </p>
      </TagBlock>
    </div>
  );
}
`,k=`import { useEffect, useState } from "react";\r
import { projects } from "../data/projects";\r
import missingImage from "public/assets/missing_image.jpg";\r
\r
export default function Projects() {\r
  return (\r
    <div className="flex flex-col w-full h-full items-center">\r
      <h1 className="text-4xl">Projects</h1>\r
      <ProjectSection />\r
    </div>\r
  );\r
}\r
\r
const ProjectSection = () => {\r
  return (\r
    <div className="w-full sm:w-fit">\r
      {projects.map((project) => (\r
        <ProjectContainer key={project.name} project={project} />\r
      ))}\r
    </div>\r
  );\r
};\r
\r
const ProjectContainer = ({ project }: { project: Project }) => {\r
  return (\r
    <div className="flex flex-col p-6 my-8 bg-secondary border-primary-light border-1 gap-6 rounded-xl sm:flex-row sm:p-4 sm:h-50 sm:gap-4 ">\r
      <ProjectImage imageSrc={project.imageSrc} />\r
      <div className="flex flex-col gap-2 sm:w-xl ">\r
        <h2 className="text-2xl">{project.name}</h2>\r
        <p className="flex-1 overflow-hidden text-ellipsis line-clamp-4">\r
          {project.description}\r
        </p>\r
        <TagSection tags={project.tags} />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
const ProjectImage = ({\r
  imageSrc = [missingImage],\r
}: {\r
  imageSrc?: Array<string>;\r
}) => {\r
  const [currentIndex, setCurrentIndex] = useState(0);\r
\r
  useEffect(() => {\r
    if (imageSrc.length <= 1) return;\r
\r
    const interval = setInterval(() => {\r
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);\r
    }, 3000);\r
\r
    return () => clearInterval(interval);\r
  }, [imageSrc]);\r
\r
  return (\r
    <div className="aspect-square h-full w-auto">\r
      <img\r
        src={imageSrc[currentIndex]}\r
        className="h-full w-full object-cover rounded-xl"\r
      />\r
    </div>\r
  );\r
};\r
\r
const TagSection = ({ tags }: { tags: Array<string> }) => {\r
  return (\r
    <div className="flex flex-row gap-2">\r
      {tags.map((tag) => (\r
        <TagContainer key={tag} tag={tag} />\r
      ))}\r
    </div>\r
  );\r
};\r
\r
const TagContainer = ({\r
  tag,\r
  className,\r
}: {\r
  tag: string;\r
  className?: string;\r
}) => {\r
  return (\r
    <div\r
      className={\`rounded-full py-0.5 px-2 text-sm bg-neutral-light text-neutral-dark \${className}\`}\r
    >\r
      {tag}\r
    </div>\r
  );\r
};\r
`,b=[{regex:/^\s*(export|import|const|default|from|function|for|if)\s*/,render:(e,r)=>t.jsx("span",{className:"text-[#569cd6]",children:e[0]},r)},{regex:/^\s*(className)\s*/,render:(e,r)=>t.jsx("span",{className:"text-[#9cdcf0]",children:e[0]},r)},{regex:/^\s*=\s*/,render:(e,r)=>t.jsx("span",{className:"text-gray-300",children:e[0]},r)},{regex:/^\s*({|}|\[|\])\s*/,render:(e,r)=>t.jsx("span",{className:"text-[#ffd710]",children:e[0]},r)},{regex:/^\s*(\(|\))\s*/,render:(e,r)=>t.jsx("span",{className:"text-[#da70b2]",children:e[0]},r)},{regex:/^\s*(<|>|<\/|\/>)\s*/,render:(e,r)=>t.jsx("span",{className:"text-[#808080]",children:e[0]},r)},{regex:/^\s*(".*"|`.*`)/,render:(e,r)=>t.jsx("span",{className:"text-[#ce9078]",children:e[0]},r)},{regex:new RegExp("^\\/*\\w+(?=.*?(?<!=)>)"),render:(e,r)=>t.jsx("span",{className:"text-[#569cd6]",children:e[0]},r)},{regex:/^\s*(\S+)\s*/,render:(e,r)=>t.jsx("span",{className:"text-gray-300",children:e[0]},r)}],m=Object.assign({"../../routes/about.tsx":y,"../../routes/home.tsx":w,"../../routes/projects.tsx":k}),u={};var d;for(const e in m){const r=(d=e.split("/").pop())==null?void 0:d.replace(".tsx","");r&&(u[r]=m[e])}function S(){const r=p().pathname.split("/")[2]||"home",n=u[r]||"",s=c.useMemo(()=>t.jsx(I,{code:n}),[n]);return t.jsx("div",{className:"absolute inset-0 h-screen w-screen overflow-hidden animated-background",children:t.jsx("div",{className:"code-scroll-wrapper opacity-10",children:Array.from({length:16}).map((a,o)=>t.jsx(c.Fragment,{children:s},o))})})}const I=({code:e,className:r})=>{const n=[];let s=e,a=0;for(;s.length>0;){let o=!1;for(const i of b){const l=i.regex.exec(s);if(l){a++;const f=i.render(l,a.toString());n.push(f),s=s.slice(l[0].length),o=!0;break}}if(!o){n.push(t.jsx("span",{className:"text-red-500",children:s})),s="";break}}return t.jsx("span",{children:n})};function _({className:e}){const[r,n]=c.useState(!1);return t.jsxs("nav",{className:`${e}`,children:[t.jsx("div",{className:"flex w-full bg-secondary justify-end px-5 py-2.5",children:t.jsx("button",{className:"text-3xl",onClick:()=>{n(s=>!s)},children:"☰"})}),r?t.jsx(C,{tabItems:x}):null]})}const C=({tabItems:e})=>t.jsx("div",{className:"flex flex-col bg-primary py-2.5",children:e.map(r=>t.jsx("a",{href:r.link,className:"px-5 py-2.5",children:r.name},r.name))}),O=g(function(){return t.jsxs("div",{className:"flex flex-col sm:flex-row h-screen",children:[t.jsx(S,{}),t.jsx(j,{className:"hidden sm:flex sm:flex-1/4"}),t.jsx(_,{className:"sm:hidden"}),t.jsx("main",{className:"sm:flex-3/4 sm:p-12 p-8 overflow-y-auto",children:t.jsx(h,{})})]})});export{O as default};
