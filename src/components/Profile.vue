<template>
  <div class="hello">
    <form @submit.prevent="getUserName">
      <input type="text" name="name">
      <button type="submit">Search</button>
    </form>
    <img :src=avatarUrl>
    <p v-if="name">USERNAME: {{ name }}</p>
    <p v-if="followers">FOLLOWERS: {{ followers }}</p>
    <p v-if="following">FOLLOWING: {{ following }}</p>
    <p v-if="list">RAW DATA:</p>
    <p>{{ list }}</p>
    <p>{{ status  }}</p>
  </div>
</template>

<script>
import { getUserInfo } from "../assets/github-profile.js";
import { getUserEvents } from "../assets/github-events.js";
export default {
  name: 'Profile',
  data() {
    return {
      name: "",
      avatarUrl: "",
      followers: "",
      follwing: "",
      list: "",
      status: ""
    };
  },

  methods: {
    getProfileData() {
      console.log(this.name);
    },
    async getData(us) {
      try {
        let user = await getUserInfo(us);
        this.avatarUrl = user["data"]["avatar_url"];
        this.name = us;
        this.followers = user["data"]["followers"];
        this.following = user["data"]["following"];
      } catch (error) {
        console.log(error);
        this.avatarUrl = "";
        this.name =  "";
        this.followers =  "";
        this.following =  "";
        this.list = "";
        this.status = "USER NOT FOUND";
      }
    },
    async getEvents(us) {
      try {
        let events = await getUserEvents(us);
        this.list = events;
        console.log(events);
      } catch (error) {
        console.log(error);
        this.avatarUrl = "";
        this.name =  "";
        this.followers =  "";
        this.following =  "";
        this.list = "";
        this.status = "USER NOT FOUND";
      }
    },
    getUserName (submitEvent) {
      this.name = submitEvent.target.elements.name.value
      console.log(this.name);
      this.getData(this.name);
      this.getEvents(this.name);
    }
  },

  created() {

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
