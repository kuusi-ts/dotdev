import { define } from "../../utils.ts";

// Turn this into a github api fetcher for cool stats from github

export const handler = define.handlers({
  GET(ctx) {
    const name = ctx.params.name;
    return new Response(
      `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`,
    );
  },
});
