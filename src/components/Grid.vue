<template>
  <div>
    <div class="grid">
      <GridItems v-bind:deck="deck" />
    </div>
  </div>
</template>

<script>
  import GridItems from './GridItems.vue';
  import { v4 as uuidv4 } from 'uuid';
  import { cloneDeep } from 'lodash';
  import router from '../router.js'
  import axios from 'axios';

  export default {
    name: "Grid",
    props: [],
    data() {
      return {
        deck: [],
        counter: 0
      }
    },
    components: {
      GridItems
    },
    methods: {
      duplicate(arr) {
        return arr.concat(cloneDeep(arr));
      },
      shuffle(arr) {
        for(let i = arr.length - 1; i > 0; i--){
          const j = Math.floor(Math.random() * i)
          const temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
        return arr;
      },
      createUniqueKey(arr) {
        for(let i = 0; i < arr.length; i++) {
          arr[i].uniqueKey = uuidv4();
        }
        return arr;
      },
      setMatched(cardId) {
        this.deck.filter(item => item.id === cardId).map(item => item.matched = true);
        if (this.deck.filter(item => item.matched).length === this.deck.length) {
          router.push({ name: "win", params: {counter: this.counter}} );
        }
      },
      setHidden(cardIds) {
        window.setTimeout(() => {
          return cardIds.forEach(id => {
            this.deck.filter(item => item.id === id).map(item => item.revealed = false)
          });
        }, 1000)
      },
      countClicks() {
        this.counter++;
      }
    },
    created() {
      axios.get('https://api.thecatapi.com/v1/images/search?limit=8')
        .then(res => {
          res.data.forEach(item => {
            item.matched = false;
            item.revealed = false;
          })
          this.deck = res.data;
        })
       .catch(err => {
         console.log("An error occured while fetching images, a default set of cards will be used", err)
         this.deck.push(
           {url: require('@/assets/cats/100.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/101.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/200.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/201.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/202.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/204.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/206.jpeg'), id: uuidv4(), matched: false, revealed: false},
           {url: require('@/assets/cats/207.jpeg'), id: uuidv4(), matched: false, revealed: false}
         );
       })
       .then(() => {
         this.deck = this.duplicate(this.deck);
         this.deck = this.shuffle(this.deck);
         this.deck = this.createUniqueKey(this.deck);
       })
    }
  }
</script>

<style scoped>
</style>
