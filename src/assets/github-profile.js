import { octokit } from "./octokit-setup.js";

async function getUserInfo() {
  let pro = await octokit.request("GET /users/MiTo0o");
  let rl = await octokit.request('GET /rate_limit');
  console.log(rl);
  return pro;
}

export { getUserInfo };