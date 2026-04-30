import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET() {
    const resp = await fetch("https://api.github.com/repos/kuusi-ts/kuusi", {
      headers: {
        Authorization: `Bearer ${Deno.env.get("GITHUB_TOKEN")}`,
      },
    });

    const data = await resp.json();

    const contributorResp = await fetch(data.contributors_url, {
      headers: {
        Authorization: `Bearer ${Deno.env.get("GITHUB_TOKEN")}`,
      },
    });

    const contributorsCount = await contributorResp.json();

    return Response.json({
      stars: data.stargazers_count,
      forks: data.forks_count,
      contributors: contributorsCount.length,
    });
  },
});
