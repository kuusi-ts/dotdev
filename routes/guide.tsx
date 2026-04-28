import { Head } from "fresh/runtime";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/javascript";
import { define } from "../utils.ts";

hljs.registerLanguage("typescript", typescript);

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <Head>
        <title>Guide | kuusi</title>
      </Head>
      <div class="flex flex-col gap-10 w-full">
        <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
          <h1 class="text-4xl mb-4 font-bold inline-block">
            Guide
          </h1>

          <p class="my-2">
            Getting started with kuusi.
          </p>
        </div>

        <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
          <h1 class="mb-3 text-3xl font-bold">
            Getting started
          </h1>

          <p class="my-3">
            Getting started with kuusi is really easy. Firstly, run the init
            command to create the basic structure of your project.
          </p>

          <div class="bg-bg-1 p-10 rounded-[15px] mockup-code">
            <pre data-prefix="1">
              <code >
                deno run -Ar jsr:@kuusi/init trillion-dollar-project
              </code>
            </pre>
          </div>

          <p class="my-3">
            Here we are creating a new project called{" "}
            <code class="bg-bg--1 rounded-[2px] border-">
              trillion-dollar-project
            </code>.

            <pre>
              <code class="language-typescript">
                console.log("Hallo daar");
              </code>
            </pre>
          </p>
        </div>
      </div>
    </div>
  );
});
