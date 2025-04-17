import projectCode from "../../routes/projects.tsx?raw";
import aboutCode from "../../routes/about.tsx?raw";

export default function AnimatedLayer() {
  parseCodeArrayToString([projectCode, aboutCode]);

  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden animated-background">
      <div className="code-scroll-wrapper">
        <div className="code-block opacity-5 text-sm leading-relaxed">
          {projectCode} {aboutCode}
          {projectCode} {aboutCode}
          {projectCode} {aboutCode}
        </div>
        <div className="code-block opacity-5 text-sm leading-relaxed">
          {projectCode} {aboutCode}
          {projectCode} {aboutCode}
          {projectCode} {aboutCode}
        </div>
      </div>
    </div>
  );
}

const parseCodeArrayToString = (codeArray: Array<string>) => {
  for (let codeChunk of codeArray) {
    parseCodeToString(codeChunk);
  }
};

const parseCodeToString = (codeChunk: string) => {
  console.log(codeChunk);
  let lineArray = codeChunk.split("\n");

  for (let line of lineArray) {
    console.log("a", line);
  }
};
