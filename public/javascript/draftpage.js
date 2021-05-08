let buttonEl = document.querySelector(".listen");
let nameEl = document.querySelectorAll(".card-title");
let nameEl2 = document.querySelector(".card-title");
let pokeTeam = []

buttonEl.addEventListener("click", function (event) {
    let thisPokemonData = event.target.id;
    let pokeArray = thisPokemonData.split(" ");

    let pokemonData = {
        name: pokeArray[0],
        hp: pokeArray[1],
        attact: pokeArray[2],
        defense: pokeArray[3],
        speed: pokeArray[4],
        imageSrc: pokeArray[5]
    }
    let pokemonName = pokeArray[0];
    console.log(pokemonName);
    console.log(pokemonData);

    if (pokeTeam.length < 6 && !pokeTeam.includes(pokemonData)) {
        pokeTeam.push(pokemonData);
        console.log(pokeTeam);
        let thisButton = document.getElementById(`${pokemonName}`);
        console.log(`${pokemonName}`)
        thisButton.disabled = true;
        thisButton.innerText = "Already Drafted!"
    }
});


