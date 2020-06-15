# VueJsMemoryGame

This is a small memory game written with Vue.js for demonstration purposes.  

The game will load 8 random cat pictures from a WebAPI, duplicate and shuffle them and, finally, place them upside-down on a grid.  
The player can then unveil two cards by clicking on them. If the cards match, they will stay unveiled. If they don't, both are flipped again. The game ends when all cards haven been matched with their counterpart.  
If the WebAPI does not respond/deliver, a default deck of cards will be used.

## Prerequisites

* Node.js
* NPM
* Internet connection
* A modern browser

## Project setup
```
git clone <repo>
cd <repo>
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Copyright
All images in the directory src/assets/cats are provided under MIT license (https://github.com/httpcats/http.cat/blob/master/LICENSE).  
"Playing Card 6 of Hearts" by aquarian_insight is licensed under CC BY-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/2.0/  
The code in this repository is provided under GPLv3 license.
