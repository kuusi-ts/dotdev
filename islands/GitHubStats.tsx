import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { GitHubStats } from "../lib/utils.ts";

export default function GithubStats() {
  const stats = useSignal<GitHubStats | null>(null);
  const error = useSignal<string | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => stats.value = data)
      .catch((e) => error.value = e.message);
  }, []);

  if (error.value) return <p>Failed to load stats.</p>;
  if (!stats.value) return <p>Loading GitHub stats...</p>;

  return (
    <p>
      {stats.value.stars} stars · {stats.value.forks} forks ·{" "}
      {stats.value.contributors}{" "}
      {"contributors" + (stats.value.contributors !== 1 ? "s" : "")}
    </p>
  );
}
