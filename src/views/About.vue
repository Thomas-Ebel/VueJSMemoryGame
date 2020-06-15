<template>
  <div>
    <h2>Memory Game in Vue.js by Thomas Ebel</h2>
    <div>This game was written as a demonstration of Vue.js, created in 3 days</div>
    <div>The following concepts are part of this solution</div>
    <ul>
      <li>General Vue Concepts</li>
      <ul class="detailed">
        <li>Components</li>
        <li>Views</li>
        <li>Declarative Rendering, binding attributes</li>
        <li>Conditionals and Loops</li>
        <li>Passing Props and calling parent methods</li>
        <li>Fetch Requests (axios)</li>
        <li>...</li>
      </ul>
      <li>Vue Router</li>
      <ul class="detailed">
        <li>Routes</li>
        <li>Programmatically Routing</li>
        <li> ... passing props</li>
        <li>...</li>
      </ul>
      <li>Styling</li>
      <ul class="detailed">
        <li>Scoped Styles</li>
        <li>Responsive Design</li>
        <li>Grid Layout</li>
        <li>...</li>
      </ul>
    </ul>
    <ul>How to play Memory
      <ul class="detailed">
        <li>Unveil two cards by clicking on them.</li>
        <li>If they match/show the same cat picture, they will stay unveiled.</li>
        <li>Once you've unveiled all cards, you've won!</li>
        <li>The cat pictures are randomly selected from an WebAPI, so they will be different every time you play.</li>
      </ul>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  ul {
    text-align: left;
    margin-left: 20%;
  }
  .detailed {
    margin-left: 5%;
  }
  ul li {
    list-style-type: none;
  }
</style>
