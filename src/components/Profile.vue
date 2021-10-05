<template>
  <div class="hello">
    <input v-model="name" placeholder="edit me">
    <p>Message is: {{ name }}</p>
    <button @click="getProfileData">Search</button>
  </div>
</template>

<script>

import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.API_KEY});


async function hehe() {
  let pro = await octokit.request("GET /users/MiTo0o");
  console.log(pro)
  return pro;
}

hehe();


export default {
  name: 'Profile',
  data() {
    return {
      name: "",
    };
  },

  methods: {
    getProfileData() {
      console.log(this.name);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
