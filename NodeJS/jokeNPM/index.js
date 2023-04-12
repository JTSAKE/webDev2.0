let giveMeAJoke = require('give-me-a-joke');
let colors = require('../colorNPM');

giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});
