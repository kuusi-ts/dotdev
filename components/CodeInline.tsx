import { ComponentChildren } from "preact";

export function CodeInline({ children }: { children: ComponentChildren }) {
  return (
    <code class="bg-bg--1 rounded-[2px]">
      {children}
    </code>
  );
}
