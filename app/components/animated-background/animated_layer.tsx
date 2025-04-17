const codeFiles = import.meta.glob("../../routes/**/*.tsx", {
  query: "raw",
  import: "default",
  eager: true,
});
import { useLocation } from "react-router";

const codeMap: Record<string, string> = {};
for (const path in codeFiles) {
  const fileName = path.split("/").pop()?.replace(".tsx", "");
  if (fileName) {
    codeMap[fileName] = codeFiles[path] as string;
  }
}

export default function AnimatedLayer() {
  const location = useLocation();
  const path = location.pathname.split("/")[2] || "home"; // Get Current Path
  const selectedCode = codeMap[path] || ""; // Get the Code for the current Path loaded by import.meta.glob

  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden animated-background">
      <div className="code-scroll-wrapper">
        <div className="code-block opacity-5 text-sm leading-relaxed">
          {selectedCode} {selectedCode}
          {selectedCode} {selectedCode}
          {selectedCode} {selectedCode}
          {selectedCode} {selectedCode}
        </div>
        <div className="code-block opacity-5 text-sm leading-relaxed">
          {selectedCode} {selectedCode}
          {selectedCode} {selectedCode}
          {selectedCode} {selectedCode}
          {selectedCode} {selectedCode}
        </div>
      </div>
    </div>
  );
}
