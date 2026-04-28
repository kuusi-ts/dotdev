import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { KuusiLogo } from "@/components/kuusiLogo.tsx";

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <Head>
        <title>kuusi</title>
      </Head>
      <div class="flex flex-col gap-10">
        <div class="flex flex-row gap-10">
          <div class="bg-bg p-10 rounded-[15px] w-1/2 border border-(--border-white)">
            <h1 class="text-4xl font-bold">kuusi</h1>
            <p class="text-2xl font-bold">simple, configurable, six</p>
            <p class="my-4">
              Set up your new backend with kuusi
            </p>
          </div>

          <div class="p-10 w-1/2 ">
            <KuusiLogo {...{ x: 200, y: 200 }} />
          </div>
        </div>

        <div class="flex flex-row gap-10">
          <div class="bg-bg p-10 rounded-[15px] w-1/2  mockup-code">
            <pre data-prefix="1"><code>deno run -Ar jsr:@kuusi/init trillion-dollar-project</code></pre>
          </div>

          <div class="bg-bg p-10 rounded-[15px] w-1/2 border border-(--border-white)">
            <h1 class="text-4xl font-bold">Setup</h1>
            <p class="my-4">
              Setting up is as easy as yksi, kaksi, kolme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
