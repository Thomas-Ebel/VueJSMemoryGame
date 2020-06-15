<template>
  <div class="grid">
    <span v-bind:key="card.uniqueKey" v-for="card in deck">
      <GridItem v-bind:card="card" v-bind:deck="deck" />
    </span>
  </div>
</template>

<script>
  import GridItem from './GridItem';

  export default {
    name: "GridItems",
    props: ["deck"],
    components: {
      GridItem
    },
    data() {
      return {
        cardsClicked: [],
      }
    },
    methods: {
      cardClick(cardId) {
        this.$parent.countClicks();
        if (this.cardsClicked.length == 1){
          // 1 card was already clicked,
          // now check whether the current one and the previous one are identical
          if (this.cardsClicked.find(item => item == cardId)) {
            // if there is a match, set both cards (same id) as matched
            this.$parent.setMatched(cardId);
          } else {
            // if there was no match, hide both cards
            this.$parent.setHidden(this.cardsClicked.concat(cardId));
          }
          this.cardsClicked = []
        } else {
          this.cardsClicked.push(cardId);
        }
      }
    }
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-evenly;
    grid-template-rows: auto auto auto auto;
    grid-gap: 20px;
  }
  @media (min-width: 500px) {
    .grid {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-gap: 35px;
    }
  }
  @media (min-width: 1025px) {
    .grid {
      display: grid;
      grid-template-columns: 22% 22% 22% 22%;
      grid-gap: 45px;
    }
  }
</style>
