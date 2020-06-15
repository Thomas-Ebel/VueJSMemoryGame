<template>
  <header class="header">
    <h1>Memory Game</h1>
    <div id="nav">
      <router-link class="nav-item" to="/">Play Memory!</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  header {
    background-color: black;
    color: #eee;
    padding: 20px;
  }
  #nav {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .header a {
    color: #eee;
    padding: 0 15px 10px 50px;
    text-decoration: none;
  }
  .header a:hover {
    color: #a8a8a8;
    text-decoration: underline;
  }
</style>
