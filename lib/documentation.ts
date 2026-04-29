export type AllowedTags = "p" | "h1" | "h2" | "h3" | "h4" | "code";

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
};
