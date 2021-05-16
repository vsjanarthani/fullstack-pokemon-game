const router = require('express').Router();
const fetch = require('node-fetch');
const sessionAuth = require('../../utils/auth');
const dev = (process.env.NODE_ENV != 'production');
const server = dev ? 'http://localhost:5000' : process.env.SERVER_PROD;


// Function to fetch pokemon API once a day

const fetchAPI = async () => {
    try {
        await setTimeout(() => {
            getPokemon();
        }, 500);
    }
    catch (e) {
        console.log(e)
    }
};
fetchAPI().then(() => {
    setInterval(getPokemon, 1000 * 60 * 60 * 24);
});

// fetching our selected pokedex from database
let selectedPokedex = [];
setTimeout(() => {
    fetch(`${server}/api/pokemons`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const pokedex = data[i].pokedex;
                selectedPokedex.push(pokedex)
            }
            // console.log(selectedPokedex);
        })
        .catch(e => {
            console.log(e);

        });
}, 500);

// setting empty array to hold random pokemon ids to pull from api
let pokeNums = [];

// adding 20 random numbers to our array, making sure there are no repeats
for (let i = 0; i < 20; i++) {
    const singlePokeNum = Math.floor(Math.random() * 898) + 1;
    if (!pokeNums.includes(singlePokeNum) && !selectedPokedex.includes(singlePokeNum)) {
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
                    pokedex: data.id,
                    pokemon_name: (data.name).toUpperCase(),
                    pokemon_pic: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    selected: false,
                };
                pokeData.push(eachPoke);
            })
            .catch(e => {
                console.log(e);
                res.status(400).json({ Error: e });
            });
    }
};


// Post request to update pokemon data when its drafted to a team
router.post("/updatePokeData", (req, res) => {
    console.log("this is req.body");
    console.log(req.body);
    let updatedPokemon = req.body;
    for (let i = 0; i < updatedPokemon.length; i++) {
        const newPoke = updatedPokemon[i].pokedex;
        for (let i = 0; i < pokeData.length; i++) {
            const pokeInData = pokeData[i].pokedex;
            if (pokeInData == newPoke) {
                pokeData[i].selected = true;
            }
        }
    }
});

// Post request to update pokemon data when its removed from a team
router.post("/updatePokeDataDelete", (req, res) => {
    console.log("this is req.body.id");
    console.log(req.body.id);
    let deletedPokemon = req.body.id;
    for (let i = 0; i < pokeData.length; i++) {
        const pokeInData = pokeData[i].pokedex;
        if (pokeInData == deletedPokemon) {
            pokeData[i].selected = false;
        }
    }
});

// Function to render Draftpage
router.get('/', sessionAuth, (req, res) => {
    // console.log(pokeData)
    res.render("draftpage", {
        pokeData,
        loggedIn: req.session.loggedIn,
    })
});

module.exports = router;


