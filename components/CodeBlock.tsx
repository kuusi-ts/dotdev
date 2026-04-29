import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("typescript", typescript);

interface CodeBlock {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlock) {
  let highlightedCode = hljs.highlight(code, { language }).value;

  highlightedCode = highlightedCode.split("\n").map((element, index) =>
    index === 0 ? element : ("  " + element)
  ).join("\n");

  highlightedCode = highlightedCode.slice(0, -3);

  return (
    <div class="bg-bg--1 p-10 rounded-[15px] mockup-code">
      <pre dangerouslySetInnerHTML={{ __html: highlightedCode }}>
      </pre>
    </div>
  );
}
