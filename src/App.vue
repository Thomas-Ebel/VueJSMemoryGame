<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #e4b334;
    color: #2c3e50;
    margin: 0 25px;
    padding: 0;
    font-size: 32px;
  }
  @media (max-width: 500px) {
    #app {
      font-size: 16px;
    }
  }
</style>
