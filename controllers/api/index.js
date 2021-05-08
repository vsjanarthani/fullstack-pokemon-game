const router = require('express').Router();

const userRoute = require('./user-route');
const highscoreRoute = require('./highscore-route');
const pokemonRoute = require('./pokemon-route');
const teamRoutes = require('./team-route');


router.use('/users', userRoute);
router.use('/highscores', highscoreRoute);
router.use('/pokemons', pokemonRoute);
router.use('/team', teamRoutes);

module.exports = router;