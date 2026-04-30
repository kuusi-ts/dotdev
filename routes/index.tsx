import { KuusiLogo } from "@/components/KuusiLogo.tsx";
import { Head } from "fresh/runtime";
import { CodeBlock } from "../components/CodeBlock.tsx";
import { define } from "../utils.ts";
import GithubStats from "../islands/GitHubStats.tsx";
import { Mensen } from "@/components/Mensen.tsx";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <Head>
        <title>kuusi</title>
      </Head>
      <div class="flex flex-col gap-10">
        <div class="flex flex-row gap-10">
          <div class="w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 h-auto rounded-[15px] border border-(--border-white)">
              <h1 class="mb-2 text-4xl font-bold">
                kuusi
              </h1>
              <p class="text-2xl font-bold my-2">
                simple, configurable, six
              </p>

              <p class="my-2">
                Everything anyone will ever need
              </p>
            </div>
          </div>

          <div class="p-10 w-1/2 flex items-center justify-center">
            <div>
              <KuusiLogo {...{ x: 200, y: 200 }} />
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-10 h-auto">
          <div class="p-10 w-1/2 content-center">
            <CodeBlock
              {...{
                code: "deno run -Ar jsr:@kuusi/init trillion-dollar-project",
                language: "typescript",
              }}
            />
          </div>

          <div class="w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
              <h1 class="text-4xl font-bold mb-2">
                Setup
              </h1>
              <p class="my-2">
                Setting up is as easy as yksi, kaksi, kolme.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-10">
          <div class="w-1/2 flex items-center justify-center">
            <div class="bg-bg p-10 h-auto rounded-[15px] border border-(--border-white)">
              <h1 class="mb-2 text-4xl font-bold">
                Loved by the community
              </h1>

              <p class="my-2">
                What <s>experts</s> random people say about it
              </p>

              <GithubStats />
            </div>
          </div>

          <div class="p-10 w-1/2 flex items-center justify-center">
            <div>
              <Mensen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
