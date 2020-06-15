<template>
  <div class="flip-card">
    <div class="flip-card-inner" v-bind:matched="card.matched" v-on:click="reveal()" v-bind:style='{"transform": card.revealed ? "rotateY(180deg)" : "" }' >
      <div class="flip-card-front">
        <img class="grid-item" :src="cardBack" />
      </div>
      <div class="flip-card-back">
        <img class="grid-item" :src="card.url" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GridItem",
    props: ["card", "deck"],
    methods: {
      reveal() {
        if (!this.card.matched && !this.card.revealed && this.deck.filter(item => item.revealed && !item.matched).length <= 1) {
          this.card.revealed = !this.card.revealed;
          this.$parent.cardClick(this.card.id);
        }
      }
    },
    data() {
      return {
        cardBack: require('@/assets/card_hidden.jpg')
      }
    }
  }
</script>

<style scoped>
  .grid-item {
    display: inline-grid;
    width: 80%;
    height: 250px;
    border: 1px white solid;
  }
  .grid-item > img {
    object-fit: cover;
    width: 100%;
  }
  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 250px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
