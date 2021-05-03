const router = require('express').Router();

const userRoutes = require('./user-route');
const pokemonRoutes = require('./pokemon-route');


router.use('/users', userRoutes);
router.use('/pokemons', pokemonRoutes);

module.exports = router;