import { KuusiLogo } from "@/components/KuusiLogo.tsx";
import { Mensen } from "@/islands/Mensen.tsx";
import { Head } from "fresh/runtime";
import { CodeBlock } from "../components/CodeBlock.tsx";
import GithubStats from "../islands/GitHubStats.tsx";
import { define } from "../utils.ts";

export default define.page(function Home() {
  const decoder = new TextDecoder();

  const exampleCode = decoder.decode(
    Deno.readFileSync("./static/exampleCode.txt"),
  );
  const exampleConfig = decoder.decode(
    Deno.readFileSync("./static/configExample.txt"),
  );

  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <Head>
        <title>kuusi</title>
      </Head>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col md:flex-row gap-10">
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 h-auto rounded-[15px] border border-(--border-white) hover:border-kuusi-blue">
              <h1 class="text-4xl font-bold my-1">
                kuusi
              </h1>

              <p class="text-2xl font-bold my-1">
                Simple, configurable, six
              </p>

              <p class="my-1">
                Your next TypeScript-friendly backend framework for Deno
              </p>
            </div>
          </div>

          <div class="p-10 w-full md:w-1/2 flex items-center justify-center">
            <div>
              <KuusiLogo {...{ x: 200, y: 200 }} />
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse gap-10 h-auto">
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 rounded-[15px] border border-(--border-white) hover:border-kuusi-blue">
              <h1 class="text-4xl font-bold my-1">
                Setup
              </h1>

              <h4 class="text-xl font-bold my-1">
                Setting up is as easy as yksi, kaksi, kolme.
              </h4>

              <p class="my-1">
                Building an API has never been so simple.
              </p>
            </div>
          </div>

          <div class="p-10 w-full md:w-1/2 content-center">
            <CodeBlock
              {...{
                code: "deno run -Ar jsr:@kuusi/init trillion-dollar-project",
              }}
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-10 h-auto">
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 rounded-[15px] border border-(--border-white) hover:border-kuusi-blue">
              <h1 class="text-4xl font-bold my-1">
                Simple file-based routing
              </h1>

              <h4 class="text-xl font-bold my-1">
                Easily extensible for maximum flexibility.
              </h4>

              <p class="my-1">
                Regular, webhook and websocket endpoints are all supported.
              </p>
            </div>
          </div>

          <div class="p-10 w-full md:w-1/2 content-center">
            <CodeBlock
              {...{ code: exampleCode }}
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse gap-10 h-auto">
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 rounded-[15px] border border-(--border-white) hover:border-kuusi-blue">
              <h1 class="text-4xl font-bold my-1">
                Configure with ease
              </h1>

              <h4 class="text-xl font-bold my-1">
                Configure however you desire.
              </h4>

              <p class="my-1">
                Your app, your rules!
              </p>
            </div>
          </div>

          <div class="p-10 w-full md:w-1/2 content-center">
            <CodeBlock
              {...{ code: exampleConfig }}
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-10">
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 h-auto rounded-[15px] border border-(--border-white) hover:border-kuusi-blue">
              <h1 class="mb-2 text-4xl font-bold">
                Loved by the community
              </h1>

              <p class="my-2">
                What <s>experts</s> random people say about it
              </p>

              <GithubStats />
            </div>
          </div>

          <div class="p-10 w-full md:w-1/2 flex items-center justify-center">
            <div>
              <Mensen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
