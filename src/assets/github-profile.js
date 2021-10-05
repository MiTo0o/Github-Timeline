import { octokit } from "./octokit-setup.js";

async function getUserInfo() {
  let pro = await octokit.request("GET /users/MiTo0o");
  console.log(pro)
  return pro;
}

export { getUserInfo };