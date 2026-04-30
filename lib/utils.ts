export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

export interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
}
