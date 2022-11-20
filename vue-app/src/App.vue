<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LedController />
</template>

<script>
import LedController from './components/LedController.vue'

export default {
  name: 'App',
  components: {
    LedController
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 800px;
  height: auto;
}
</style>
