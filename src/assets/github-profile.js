import { octokit } from "./octokit-setup.js";

async function getUserInfo(user) {
  let pro = await octokit.request("GET /users/"+user);
  let rl = await octokit.request('GET /rate_limit');
  console.log(rl);
  return pro;
}

export { getUserInfo };