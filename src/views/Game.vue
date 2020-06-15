<template>
  <div>
    <p>Let's play a round of memory!</p>
    <Grid />
  </div>

</template>

<script>
  import Grid from '../components/Grid';

  export default {
    name: "Header",
    components: {
      Grid
    },
    data: function () {
      return {
      }
    },
    created() {
    }
  }
</script>

<style scoped>
</style>
