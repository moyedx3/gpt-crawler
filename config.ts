import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.berachain.com/",
  match: "https://docs.berachain.com/**",
  maxPagesToCrawl: 500,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
