import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.VUE_APP_APIURL});

export { octokit };