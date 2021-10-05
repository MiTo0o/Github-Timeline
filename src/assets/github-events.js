import { octokit } from "./octokit-setup.js";

async function getUserEvents() {
    let events = [];
    let pageNum = 1;
    let event = await octokit.request("GET /users/MiTo0o/events", {
        per_page: 100,
        page: pageNum
    });

    while (event["data"].length != 0) {
        pageNum ++;
        event = await octokit.request("GET /users/MiTo0o/events", {
            per_page: 100,
            page: pageNum
        });
        events.push(event);
    }
    

    console.log(events);
    return events;
}

export { getUserEvents };