import { ComponentChildren } from "preact";

export const CodeInline = ({ children }: { children: ComponentChildren }) => (
  <code class="bg-bg--1 rounded-xs">
    {children}
  </code>
);
