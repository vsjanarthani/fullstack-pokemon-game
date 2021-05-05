// setting empty array to hold random pokemon ids to pull from api
let pokeNums = [];

// adding 20 random numbers to our array, making sure there are no repeats
for (let i = 0; i < 20; i++) {
    const singlePokeNum = Math.floor(Math.random() * 898) + 1;
    if (!pokeNums.includes(singlePokeNum)) {
        pokeNums.push(singlePokeNum);
    }
};

// looping through our array, using numbers as pokemon to get pokemon data
const getPokemon = () => {
    
    for (let i = 0; i < pokeNums.length; i++) {
        const pokeNum = pokeNums[i];
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
        .then(response => response.json())
        // .then(data => console.log(data));
        .then(data=> {
            console.log(data);
            let pokeName = data.name;
            console.log(pokeName);
            let pokeHP = data.stats[0]
            console.log(pokeHP);
        })
    }
};

getPokemon();

