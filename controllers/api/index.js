const router = require('express').Router();

const userRoutes = require('./user-route');
const pokemonRoutes = require('./pokemon-route');
const highscoreRoutes = require('./highscore-route');


router.use('/users', userRoutes);
router.use('/pokemons', pokemonRoutes);
router.use('/highscores', highscoreRoutes);

module.exports = router;