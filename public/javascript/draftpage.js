let buttonEl = document.querySelector(".listen");
let nameEl = document.querySelectorAll(".card-title");
let nameEl2 = document.querySelector(".card-title");
let pokeTeam = [] 

buttonEl.addEventListener("click", function(event) {
    let pokemonName = event.target.id;
    console.log(pokemonName);
    pokeTeam.push(pokemonName);
    console.log(pokeTeam)
});


