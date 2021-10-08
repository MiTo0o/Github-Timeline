import { octokit } from "./octokit-setup.js";

async function getUserEvents(user) {
    let events = [];
    let pageNum = 1;
    let event = await octokit.request("GET /users/"+user+"/events", {
        per_page: 100,
        page: pageNum
    });

    while (event["data"].length != 0) {
        pageNum ++;
        event = await octokit.request("GET /users/"+user+"/events", {
            per_page: 100,
            page: pageNum
        });
        events.push(event);
    }
    

    console.log(events);
    return events;
}

export { getUserEvents };