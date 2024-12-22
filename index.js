require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  "login": "Sat2jan",
  "id": 130730207,
  "node_id": "U_kgDOB8rI3w",
  "avatar_url": "https://avatars.githubusercontent.com/u/130730207?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sat2jan",
  "html_url": "https://github.com/Sat2jan",
  "followers_url": "https://api.github.com/users/Sat2jan/followers",
  "following_url": "https://api.github.com/users/Sat2jan/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sat2jan/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sat2jan/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sat2jan/subscriptions",
  "organizations_url": "https://api.github.com/users/Sat2jan/orgs",
  "repos_url": "https://api.github.com/users/Sat2jan/repos",
  "events_url": "https://api.github.com/users/Sat2jan/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sat2jan/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Satyam Prasad",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-04-14T05:07:32Z",
  "updated_at": "2024-12-19T14:40:00Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
    res.send('satyamdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',  (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
