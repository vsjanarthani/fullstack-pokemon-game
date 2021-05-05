// const router = require('express').Router();
// const { Pokemon } = require('../../models');

// // GET /api/pokemons
// router.get('/', async (req, res) => {
//   try {
//     const allPokemon = await Pokemon.findAll();
//     res.status(200).json(allPokemon);
//   }
//   catch (e) {
//     res.status(400).json({ Error: e });
//   }
// });

// // GET /api/pokemons/id
// router.get('/:id', async (req, res) => {

//   try {
//     const { id } = req.params;
//     const pokemonById = await Pokemon.findOne({
//       where: { id }
//     });
//     if (!pokemonById) {
//       return res.status(404).json({ message: 'No pokemon found with this id' });
//     }
//     res.status(200).json(pokemonById);
//   }
//   catch (e) {
//     res.status(400).json({ Error: e });
//   }
// });


// module.exports = router;