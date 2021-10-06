<template>
  <div class="hello">
    <form @submit.prevent="getUserName">
      <input type="text" name="name">
    </form>
    <button @click="getProfileData">Search</button>
    <img :src=avatarUrl>
    <p>{{ name }}</p>
    <p>{{ followers }}</p>
    <p>{{ following }}</p>

  </div>
</template>

<script>
import { getUserInfo } from "../assets/github-profile.js";

export default {
  name: 'Profile',
  data() {
    return {
      name: "",
      avatarUrl: "",
      followers: "",
      follwing: "",

    };
  },

  methods: {
    getProfileData() {
      console.log(this.name);
    },
    async getData() {
      try {
        let user = await getUserInfo();
        this.avatarUrl = user["data"]["avatar_url"];
        this.name = user["data"]["name"];
        this.followers = user["data"]["followers"];
        this.following = user["data"]["following"];
      } catch (error) {
        console.log(error);
      }
    },
    getUserName (submitEvent) {
      this.name = submitEvent.target.elements.name.value
      console.log(this.name);
    }
  },

  created() {
    this.getData();
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
