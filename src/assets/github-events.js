import { octokit } from "./octokit-setup.js";

async function getUserEvents() {
  let events = await octokit.request("GET /users/MiTo0o/events");
  console.log(events);
  return events;
}

export { getUserEvents };