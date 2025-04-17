import{w as p}from"./with-props-DaI-xS-Y.js";import{p as c,l as r,r as i,O as d}from"./chunk-KNED5TY2-9AsnIfpK.js";import{C as x}from"./caret_overtype-BpuDa-YJ.js";const l=[{name:"HOME",link:"/portfolio/"},{name:"PROJECTS",link:"/portfolio/projects"},{name:"ABOUT",link:"/portfolio/about"}];function u({className:n}){const t=c();return r.jsx("nav",{className:`sticky top-0 h-screen flex flex-col justify-center pl-20 ${n}`,children:l.map(e=>r.jsx(f,{tabItem:e,className:"my-8",activePath:t.pathname},e.name))})}const f=({tabItem:n,className:t,activePath:e})=>{const[s,b]=i.useState(!1);return r.jsxs("div",{className:`flex items-center h-[5rem] ${t}`,children:[r.jsx("div",{className:"font-unglitch text-accent-1 text-[5.3rem] tracking-[0.15rem]",children:"~/"}),r.jsxs("a",{href:n.link,className:`group hover:font-glitch hover:text-accent-2 hover:text-[5rem] hover:pb-[0.8rem] ${e===n.link?"font-glitch text-accent-2 text-[5rem] pb-[0.8rem]":"font-unglitch text-accent-1 text-[5.3rem] tracking-[0.15rem]"}`,children:[n.name,r.jsx(x,{className:"ml-1 py-2 group-hover:opacity-100 opacity-0"})]})]})},g=`import CircleIcon from "~/components/cirlce_icon";\r
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
    </div>\r
  );\r
};\r
`,h=`export default function Home() {
  return <>Home</>;
}
`,v=`import { useEffect, useState } from "react";\r
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
`,a=Object.assign({"../../routes/about.tsx":g,"../../routes/home.tsx":h,"../../routes/projects.tsx":v}),m={};var o;for(const n in a){const t=(o=n.split("/").pop())==null?void 0:o.replace(".tsx","");t&&(m[t]=a[n])}function j(){const t=c().pathname.split("/")[2]||"home",e=m[t]||"";return r.jsx("div",{className:"absolute inset-0 h-screen w-screen overflow-hidden animated-background",children:r.jsxs("div",{className:"code-scroll-wrapper",children:[r.jsxs("div",{className:"code-block opacity-5 text-sm leading-relaxed",children:[e," ",e,e," ",e,e," ",e,e," ",e]}),r.jsxs("div",{className:"code-block opacity-5 text-sm leading-relaxed",children:[e," ",e,e," ",e,e," ",e,e," ",e]})]})})}function N({className:n}){const[t,e]=i.useState(!1);return r.jsxs("nav",{className:`${n}`,children:[r.jsx("div",{className:"flex w-full bg-secondary justify-end px-5 py-2.5",children:r.jsx("button",{className:"text-3xl",onClick:()=>{e(s=>!s)},children:"☰"})}),t?r.jsx(y,{tabItems:l}):null]})}const y=({tabItems:n})=>r.jsx("div",{className:"flex flex-col bg-primary py-2.5",children:n.map(t=>r.jsx("a",{href:t.link,className:"px-5 py-2.5",children:t.name},t.name))}),I=p(function(){return r.jsxs("div",{className:"flex flex-col sm:flex-row h-screen",children:[r.jsx(j,{}),r.jsx(u,{className:"hidden sm:flex sm:flex-1/4"}),r.jsx(N,{className:"sm:hidden"}),r.jsx("main",{className:"sm:flex-3/4 sm:p-12 p-8 overflow-y-auto",children:r.jsx(d,{})})]})});export{I as default};
