<template>
  <div>
    <div v-if="this.counter">
      <h1>Congratulations!</h1>
      <p>You've won in {{ this.counter }} clicks!</p>
    </div>
    <div v-else><p>Please play the game. It's fun</p></div>
  </div>
</template>

<script>
  export default {
    name: "Win",
    props: ["counter"],
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
<style>
