const router = require('express').Router();
const fetch = require('node-fetch');
const sessionAuth = require('../../utils/auth');

// setting empty array to hold random pokemon ids to pull from api
let pokeNums = [];

// adding 20 random numbers to our array, making sure there are no repeats
for (let i = 0; i < 20; i++) {
    const singlePokeNum = Math.floor(Math.random() * 898) + 1;
    if (!pokeNums.includes(singlePokeNum)) {
        pokeNums.push(singlePokeNum);
    }
};
let pokeData = [];
// looping through our array, using numbers as pokemon to get pokemon data
const getPokemon = () => {

    for (let i = 0; i < pokeNums.length; i++) {
        const pokeNum = pokeNums[i];
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
            .then(response => response.json())
            .then(data => {
                let eachPoke =
                {
                    name: (data.name).toUpperCase(),
                    id: data.id,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    imageSrc: data.sprites.front_default
                };
                pokeData.push(eachPoke);
            })
    }
};
console.log(pokeData);

getPokemon();

// Function to render Draftpage
router.get('/', sessionAuth, (req, res) => {
    res.render("draftpage", {
        pokeData,
        loggedIn: req.session.loggedIn,
        active: true
    })
});


module.exports = router;