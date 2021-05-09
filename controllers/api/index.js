const router = require('express').Router();

const userRoute = require('./user-route');
const highscoreRoute = require('./highscore-route');
const pokemonRoute = require('./pokemon-route');


router.use('/users', userRoute);
router.use('/highscores', highscoreRoute);
router.use('/pokemons', pokemonRoute);

module.exports = router;