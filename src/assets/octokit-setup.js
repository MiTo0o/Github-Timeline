import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.API_KEY});

export { octokit };