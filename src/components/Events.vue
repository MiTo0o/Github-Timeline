<template>
  <div class="hello">
      {{ list }}

  </div>
</template>

<script>
import { getUserEvents } from "../assets/github-events.js";

export default {
  name: 'timeline',
  data() {
    return {
      list: "",
    };
  },

  methods: {

    async getEvents() {
      try {
        let events = await getUserEvents();
        this.list = events;
        console.log(events);
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {
    this.getEvents();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
