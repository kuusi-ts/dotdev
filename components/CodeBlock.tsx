import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark.css";

if (!hljs.getLanguage("typescript")) {
  hljs.registerLanguage("typescript", typescript);
}

interface CodeBlock {
  code: string;
}

export function CodeBlock({ code }: CodeBlock) {
  let highlightedCode = hljs.highlight(code, { language: "typescript" }).value;

  highlightedCode = highlightedCode.split("\n").map((element, index) =>
    element + (index === 0 ? "" : "  ")
  ).join("\n");

  return (
    <div class="bg-bg--1 p-10 rounded-[15px] mockup-code">
      <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
}
