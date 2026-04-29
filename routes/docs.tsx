import { CodeBlock } from "@/components/CodeBlock.tsx";
import { type AllowedTags, docs, type Text } from "@/lib/documentation.ts";
// Todo: shorten this
import { JSXInternal } from "@/node_modules/.deno/preact@10.29.1/node_modules/preact/src/jsx.d.ts";
import { Head } from "fresh/runtime";
import { capitalize } from "../lib/utils.ts";
import { define } from "../utils.ts";

function rawToJSX(...text: Text[]): JSXInternal.Element[] {
  const elements = [];

  for (const textPart of text) {
    const table: Record<AllowedTags, JSXInternal.Element> = {
      h1: (
        <>
          <h1 class="text-4xl my-4 font-bold inline-block">
            {textPart.content}
          </h1>
          <br />
        </>
      ),
      h2: (
        <>
          <h2 class="text-3xl my-3 font-bold inline-block">
            {textPart.content}
          </h2>
          <br />
        </>
      ),
      h3: (
        <>
          <h3 class="text-2xl my-3 font-bold inline-block">
            {textPart.content}
          </h3>
          <br />
        </>
      ),
      h4: (
        <>
          <h4 class="text-xl my-3 font-bold inline-block">
            {textPart.content}
          </h4>
          <br />
        </>
      ),
      p: (
        <p
          class="my-2"
          dangerouslySetInnerHTML={{
            __html: textPart.content
              .replaceAll(/{/g, "<CodeInline>")
              .replaceAll(/}/g, "</CodeInline>"),
          }}
        />
      ),
      code: (
        <CodeBlock
          {...{ code: textPart.content, language: "typescript" }}
        />
      ),
    };

    elements.push(table[textPart.type]);
  }

  return elements;
}

function generateDocs(): JSXInternal.Element[] {
  const docElements = [];

  // Triple nested for loop babyyyy
  for (const [title, sections] of Object.entries(docs)) {
    docElements.push(
      ...rawToJSX(
        { type: "h1", content: capitalize(title) },
        ...sections.intro,
      ),
    );

    for (
      const [subchapter, subsubchapters] of Object.entries(sections.unknownKeys)
    ) {
      docElements.push(...rawToJSX({ content: subchapter, type: "h2" }));

      for (
        const [subsubtitle, subsubsection] of Object.entries(subsubchapters)
      ) {
        docElements.push(
          ...rawToJSX({ content: subsubtitle, type: "h3" }, ...subsubsection),
        );
      }
    }
  }

  return docElements;
}

export default define.page(function Home() {
  return (
    <div class="px-4 py-8 mx-auto min-h-screen">
      <Head>
        <title>Docs | kuusi</title>
      </Head>
      <div class="flex flex-row gap-10 w-full">
        <div class="flex flex-col gap-2 w-[400px]">
          <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
            <h1 class="text-4xl mb-4 font-bold inline-block">
              Contents
            </h1>
          </div>

          <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
            <p class="my-2">
              <ul class="list-disc">
                <li>
                  Configuration
                </li>
                <li>
                  Errors
                </li>
                <li>
                  Warnings
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-10 w-[calc(100vw - 400px)]">
          <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
            <h1 class="text-4xl mb-4 font-bold inline-block">
              Docs
            </h1>

            <p class="my-2">
              Official kuusi documentation.
            </p>
          </div>

          <div class="bg-bg p-10 rounded-[15px] border border-(--border-white)">
            {generateDocs()}
          </div>
        </div>
      </div>
    </div>
  );
});
