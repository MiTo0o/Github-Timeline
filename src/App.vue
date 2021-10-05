<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Profile />
  <Events />
</template>

<script>
import Profile from './components/Profile.vue'
import Events from './components/Events.vue'

export default {
  name: 'App',
  components: {
    Profile,
    Events
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
