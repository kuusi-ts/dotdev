import { KuusiLogo } from "@/components/KuusiLogo.tsx";
import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  const Links = () => (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/guide">Guide</a>
      </li>
      <li>
        <a href="https://github.com/kuusi-ts/kuusi" target="_blank">GitHub</a>
      </li>
    </>
  );

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/static/kuusi-logo.svg" />
        <title>kuusi</title>
      </head>
      <body>
        <div class="bg-bg max-lg:collapse shadow-sm w-full rounded-md">
          <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />
          <label
            for="navbar-1-toggle"
            class="fixed inset-0 hidden max-lg:peer-checked:block"
          />
          <div class="collapse-title navbar">
            <div class="navbar-start">
              <div class="px-3" />
              <label for="navbar-1-toggle" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <KuusiLogo {...{ x: 28, y: 28 }} />
              <p class="pl-0 text-xl">
                kuusi
              </p>
            </div>

            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <Links />
              </ul>
            </div>
            <div class="navbar-end" />
          </div>

          <div class="collapse-content lg:hidden z-1">
            <ul class="menu">
              <Links />
            </ul>
          </div>
        </div>

        <Component />
      </body>
    </html>
  );
});
