import { CodeBlock } from "@/components/CodeBlock.tsx";
import { CodeInline } from "@/components/CodeInline.tsx";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  const decoder = new TextDecoder();

  const indexSourceTs = decoder.decode(
    Deno.readFileSync("./static/index.source.txt"),
  );
  const kuusiConfigTs = decoder.decode(
    Deno.readFileSync("./static/kuusi.config.txt"),
  );
  const indexTs = decoder.decode(
    Deno.readFileSync("./static/index.txt"),
  );

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
            Getting started with kuusi is really easy. Firstly, make sure you
            have the Deno runtime installed. Node.js, Bun and other runtimes are
            {" "}
            <b>not</b>{" "}
            supported. Secondly, run the init command to create the basic
            structure of your project.
          </p>

          <CodeBlock
            {...{ code: "deno run -Ar jsr:@kuusi/kuusi my-project" }}
          />

          <p class="my-3">
            Here we are creating a new project called{" "}
            <CodeInline>
              my-project
            </CodeInline>.
          </p>

          <h1 class="mb-3 text-2xl font-bold">
            Understanding kuusi
          </h1>

          <p class="my-3">
            After you run the init command, your project looks something like
            this:
          </p>

          <CodeBlock
            {...{
              code:
                "my-project/\n├── deno.json\n├── deno.lock\n├── kuusi.config.ts\n├── routes\n│   └── index.source.ts\n└── src\n    └── index.ts\n\n3 directories, 5 files",
            }}
          />

          <p class="my-3">
            There are three important files to understand,{" "}
            <CodeInline>src/index.ts</CodeInline>,{" "}
            <CodeInline>routes/index.source.ts</CodeInline> and{" "}
            <CodeInline>kuusi.config.ts</CodeInline>.
          </p>

          <h1 class="mb-3 text-xl font-bold">
            <CodeInline>routes/index.source.ts</CodeInline>
          </h1>

          <p class="my-3">
            This file, like all files in the routes are automatically imported
            and set up as route.
          </p>

          <CodeBlock {...{ code: indexSourceTs }} />

          <p class="my-4">
            This is a very basic route that returns a string as a response. This
            function does not use any of the parameters kuusi supplies
            (<CodeInline>req: Request</CodeInline> and{" "}
            <CodeInline>urlPatternResult: URLPatternResult</CodeInline>), but
            those can be used if you wish to.
          </p>

          <h1 class="mb-3 text-xl font-bold">
            <CodeInline>kuusi.config.ts</CodeInline>
          </h1>

          <p class="my-3">
            This file is your projects entrypoint. Running this file starts
            kuusi.
          </p>

          <CodeBlock {...{ code: kuusiConfigTs }} />

          <p class="my-4">
            This file is used to configure kuusi however you wish. For more
            information on configuration, see{" "}
            <a
              href="https://github.com/kuusi-ts/kuusi/blob/main/docs/DOCUMENTATION.md#kuusi-invalid-kuusi-config"
              target="_blank"
            >
              the configuration docs
            </a>.
          </p>

          <h1 class="mb-3 text-xl font-bold">
            <CodeInline>src/index.ts</CodeInline>
          </h1>

          <p class="my-3">
            This file is your projects entrypoint. Running this file starts
            kuusi.
          </p>

          <CodeBlock {...{ code: indexTs }} />

          <p class="my-4">
            This file is used to run the server. Since kuusi is only a router,
            and not a wrapper for a server, you can implement it in your own
            logic if you desire to do so.
          </p>
        </div>
      </div>
    </div>
  );
});
