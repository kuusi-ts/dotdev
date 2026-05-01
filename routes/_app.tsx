import { KuusiLogo } from "@/components/KuusiLogo.tsx";
import { define } from "../utils.ts";

const products = ["kuusi", "init", "dotdev"] as const;

const locations = [
  {
    name: "GitHub",
    link: "https://github.com/kuusi-ts/kuusi",
  },
  {
    name: "JSR",
    link: "https://jsr.io/@kuusi/kuusi",
  },
] as const;

const findUs = [
  {
    name: "GitHub",
    link: "https://github.com/kuusi-ts",
  },
] as const;

const siteLinks = [
  {
    name: "Home",
    link: "/",
    extern: false,
  },
  {
    name: "Guide",
    link: "/guide",
    extern: false,
  },
  {
    name: "GitHub",
    link: "https://github.com/kuusi-ts/kuusi",
    extern: true,
  },
  {
    name: "Docs",
    link:
      "https://github.com/kuusi-ts/kuusi/blob/main/docs/DOCUMENTATION.md#kuusi-invalid-kuusi-config",
    extern: true,
  },
  {
    name: "JSR",
    link: "https://jsr.io/@kuusi/kuusi",
    extern: true,
  },
] as const;

export default define.page(function App({ Component }) {
  const Links = () => (
    <>
      {siteLinks.map(({ name, link, extern }) => (
        <li>
          <a href={link} target={extern ? "_blank" : "_self"}>
            {name}
          </a>
        </li>
      ))}
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
      <body class="text-white">
        <div class="bg-bg  max-lg:collapse shadow-sm w-full rounded-md">
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

        <footer class="footer sm:footer-horizontal bg-bg text-white p-10">
          <aside>
            <KuusiLogo {...{ x: 40, y: 40 }} />
            <p>
              kuusi framework
              <br />
              Providing hexagons since 2026
            </p>
          </aside>
          <nav>
            <h6 class="footer-title">kuusi</h6>
            {locations.map(({ name, link }) => (
              <a
                class="link link-hover"
                href={link}
              >
                {name}
              </a>
            ))}
          </nav>
          <nav>
            <h6 class="footer-title">Products</h6>
            {products.map((repo) => (
              <a
                class="link link-hover"
                href={`https://github.com/kuusi-ts/${repo}`}
              >
                {repo}
              </a>
            ))}
          </nav>
          <nav>
            <h6 class="footer-title">Organisation</h6>
            {findUs.map(({ name, link }) => (
              <a
                class="link link-hover"
                href={link}
              >
                {name}
              </a>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
});
