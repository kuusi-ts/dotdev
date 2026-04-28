import { KuusiLogo } from "@/components/kuusiLogo.tsx";
import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/kuusi-logo.svg" />
        <title>kuusi</title>
      </head>
      <body>
        <div class="bg-bg max-lg:collapse shadow-sm w-full rounded-md">
          <div class="collapse-title navbar">
            <div class="navbar-start">
              <div class="px-3"></div>
              <label
                htmlFor="navbar-1-toggle"
                class="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <KuusiLogo {...{ x: 28, y: 28 }} />
              <p class="pl-0 text-xl">kuusi</p>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <details>
                    <summary>Docs</summary>
                    <ul class="p-2 bg-base-100 w-40 z-1">
                      <li>
                        <a href="/docs/errors">Errors</a>
                      </li>
                      <li>
                        <a href="/docs/warnings">Warnings</a>
                      </li>
                      <li>
                        <a href="docs/configuring">Configuring</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a href="/guide">Guide</a>
                </li>
              </ul>
            </div>
            <div class="navbar-end">
            </div>
          </div>

          <div class="collapse-content lg:hidden z-1">
            <ul class="menu">
              <li>
                <button>Item 1</button>
              </li>
              <li>
                <button>Parent</button>
                <ul>
                  <li>
                    <button>Submenu 1</button>
                  </li>
                  <li>
                    <button>Submenu 2</button>
                  </li>
                </ul>
              </li>
              <li>
                <button>Item 3</button>
              </li>
            </ul>
          </div>
        </div>
        <Component />
      </body>
    </html>
  );
});
