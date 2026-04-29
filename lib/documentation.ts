export type AllowedTags = "p" | "h1" | "h2" | "h3" | "h4" | "code" | "list";

export type Text = { type: AllowedTags; content: string };

interface Documentation {
  [chapter: string]: {
    intro: Text[];
    unknownKeys: {
      [subchapters: string]: {
        [subsubchapters: string]: Text[];
      };
    };
  };
}

/*
Configuring
  Text
  Routes
    Routes.directoryPath
      Text
  Dotenv
    Dotenv.nogwattes
      Text
*/

const configIntro: Text[] = [
  {
    type: "p",
    content:
      "Kuusi can easily be configured by making a {kuusi.config.ts} file in your projects root. A basic configuration file could look something like this:",
  },
  {
    type: "code",
    content: `import { KuusiConfig } from "@kuusi/kuusi/types";

const config = new KuusiConfig({
  routes: {
    path: "customRoutesDir/",
    warnAmbiguousRoutes: true,
  },
  dotenv: {
    export: true,
    templatePath: "newTemplate.env",
  },
});

export default config;`,
  },
  {
    type: "p",
    content:
      "Notice that not all fields have to be specified, a completely empty {config} is also valid. All configuration options are categorized into objects. Here is a list of those objects and the fields they contain. Make sure that the configuration is exported as default, and that the configuration is made by calling the {KuusiConfig} constructor. The class MUST be imported from {@kuusi/kuusi/types}, importing from {@kuusi/kuusi} will result in a cyclic importing deadlock.",
  },
];

const routesDirectoryPath: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  routes: {
    routdirectoryPathesDirPath: "routes/",
  },
});`,
  },
  {
    type: "p",
    content:
      "Configures the path to the directory that holds the routes. Defaults to {routes/}.",
  },
];

const routesFilePaths: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  routes: {
    filePaths: [],
  },
});`,
  },
  {
    type: "p",
    content:
      "Configures the paths to the files that hold extra routes for kuusi to load. Defaults to {[]}.",
  },
];

const routeswarnAmbiguousRoutes: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  routes: {
    warnAmbiguousRoutes: false,
  },
});`,
  },
  {
    type: "p",
    content:
      "Configures whether a warning should be shown when two url's only differ by a trailing forwardslash. Defaults to {false}",
  },
];

const dotenvExport: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  dotenv: {
    export: false,
  },
});`,
  },
  {
    type: "p",
    content:
      "Configures whether the dotenv variables should also be included in the env variables. Defaults to {false}.",
  },
];

const dotenvPath: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  dotenv: {
    path: ".env",
  },
});`,
  },
  {
    type: "p",
    content:
      "Configures the path to the dotenv file that will be loaded. Defaults to {.env}.",
  },
];

const dotenvRequiredKeys: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  dotenv: {
    requiredKeys: [],
  },
});`,
  },
  {
    type: "p",
    content:
      "An array containing keys that the dotenv file must have. Behaves exactly like a required dotenv file, but without the file. Defaults to {[]}.",
  },
];

const dotenvRequiredPath: Text[] = [
  {
    type: "code",
    content: `const config = new KuusiConfig({
  dotenv: {
    requiredPath: "required.env",
  },
});`,
  },
  {
    type: "p",
    content:
      "Configures the path to the template dotenv file that will be loaded. The template dotenv file contains all keys that the dotenv file must contain. Defaults to {required.env}.",
  },
];

const errorIntro: Text[] = [
  {
    type: "p",
    content:
      "Sometimes kuusi may tell you that your code sucks and give you an error alongside it, here is what they all mean.",
  },
];

const kuusiInvalidKuusiConfig: Text[] = [
  {
    type: "code",
    content: `new Error(
  "kuusi-invalid-kuusi-config: The exported kuusiConfig should be an instance of \`KuusiConfig\`.",
);`,
  },
  {
    type: "p",
    content:
      "Thrown when the configuration of kuusi is illegal. This can be either because the configuration you exported wasn't exported as default, because you used the wrong type for the configuration object or because you didn't use the constructor of the `KuusiConfig` class.",
  },
];

const kuusiInvalidRouteDirectory: Text[] = [
  {
    type: "code",
    content: `new Error(
  "kuusi-invalid-route-directory: The name of the routes directory is invalid.",
);`,
  },
  {
    type: "p",
    content: "Thrown when then name of the routes directory is not allowed.",
  },
];

const kuusiNoKuusiConfig: Text[] = [
  {
    type: "code",
    content: `new Error(
  "kuusi-no-kuusi-config: The configuration file does not provide a default export.",
);`,
  },
  {
    type: "p",
    content:
      "Thrown when a `kuusi.config.ts` file exists, but does not provide a default export. Check whether your configuration was exported correctly, or at all.",
  },
];

const kuusiMissingDotenvKey: Text[] = [
  {
    type: "code",
    content: `new Error(
  \`kuusi-missing-dotenv-key: Missing required dotenv variable "\${key}".\`,
);`,
  },
  {
    type: "p",
    content: "Thrown when the dotenv file is missing the required `key` key.",
  },
];

const kuusiDuplicateRoutes: Text[] = [
  {
    type: "code",
    content: `new Error(
  \`kuusi-duplicate-routes: The \${duplicate} URL is served multiple times.\`,
);`,
  },
  {
    type: "p",
    content: "Thrown when one URL can trigger two differnt routes.",
  },
  {
    type: "h4",
    content: "Example",
  },
  {
    type: "p",
    content:
      "{/kuusi/:id.source.ts} and {/kuusi/:notanid.hook.ts} share the same URL, because they both have the form of {/kuusi/[genericRoute]}. When a request is made with the URL {/kuusi/3}, it matches with both URL's which would be silly.",
  },
];

const kuusiInvalidRouteExport: Text[] = [
  {
    type: "code",
    content: `new Error(
  \`kuusi-invalid-route-export: The route file \${path} does not provide a valid default route export.\`,
);`,
  },
  {
    type: "p",
    content:
      "Thrown when the file {path} does not provide a default {WebSource}, {WebHook} or {Route} export. This error could also mean that",
  },
  {
    type: "list",
    content: "- the file does not export anything at all\n" +
      "- the file does not export the correct type of route:\n" +
      "\t- {WebSource} for {.source} files,\n" +
      "\t- {WebHook} for {.hook} files,\n" +
      "\t- and {Route} for routes outside the routes directory.\n" +
      "- the file does not export the route as default (only applies to {.source} and {.hook} files in the routes directory).",
  },
];

export const docs: Documentation = {
  configuration: {
    intro: configIntro,
    unknownKeys: {
      routes: {
        directoryPath: routesDirectoryPath,
        filePaths: routesFilePaths,
        warnAmbiguousRoutes: routeswarnAmbiguousRoutes,
      },
      dotenv: {
        export: dotenvExport,
        path: dotenvPath,
        requiredKeys: dotenvRequiredKeys,
        requiredPath: dotenvRequiredPath,
      },
    },
  },
  errors: {
    intro: errorIntro,
    unknownKeys: {
      configuration: {
        "kuusi-invalid-kuusi-config": kuusiInvalidKuusiConfig,
        "kuusi-invalid-route-directory": kuusiInvalidRouteDirectory,
        "kuusi-no-kuusi-config": kuusiNoKuusiConfig,
      },
      dotenv: {
        "kuusi-missing-dotenv-key": kuusiMissingDotenvKey,
      },
      routes: {
        "kuusi-duplicate-routes": kuusiDuplicateRoutes,
        "kuusi-invalid-route-export": kuusiInvalidRouteExport,
      },
    },
  },
};
