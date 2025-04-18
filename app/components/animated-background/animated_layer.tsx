const codeFiles = import.meta.glob("../../routes/**/*.tsx", {
  query: "raw",
  import: "default",
  eager: true,
});
import { useMemo, type ReactNode } from "react";
import { useLocation } from "react-router";
import { codeParserRegexRules } from "../../data/code_parser_regex_rules";

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

  const parsedCodeBlock = useMemo(
    () => <ParsedCodeBlock code={selectedCode} />,
    [selectedCode]
  );

  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden animated-background">
      <div className="code-scroll-wrapper opacity-10">
        {Array.from({ length: 16 }).map((_, i) => parsedCodeBlock)}
      </div>
    </div>
  );
}

const ParsedCodeBlock = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  const elements: Array<ReactNode> = [];
  let remaining = code;

  while (remaining.length > 0) {
    let matched = false;
    for (const rule of codeParserRegexRules) {
      const match = rule.regex.exec(remaining);

      if (match) {
        console.log(
          `Matched ${match[0]} with Rule: ${rule.regex}, "Length: ${match[0].length}`
        );
        const render = rule.render(match);
        elements.push(render);
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      elements.push(<span className="text-red-500">{remaining}</span>);
      remaining = "";
      break;
    }
  }

  return <span>{elements}</span>;
};
