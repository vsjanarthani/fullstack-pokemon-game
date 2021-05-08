let buttonEl = document.querySelector(".listen");
let nameEl = document.querySelectorAll(".card-title");
let nameEl2 = document.querySelector(".card-title");
let pokeTeam = []

buttonEl.addEventListener("click", function (event) {
    let pokedex = event.target.name;
    console.log(pokedex);
    
   /* if (pokeTeam.length < 6) {
        pokeTeam.push(pokedex);
        console.log(pokeTeam);
        event.target.disabled = true;
        event.target.innerText = "Already Drafted!"
    let thisPokemonData = event.target.id;
    let pokeArray = thisPokemonData.split(" ");*/

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



// //  Function to post pokemon data to the database
// const pokemonDraftHandler = event => {
    // let pokeImgEl = document.querySelector('#poke-img');
    // let draftbtnEl = document.querySelector('#draft-me-btn');
    // let hpEl = document.querySelector('#hp');
    // let attackEl = document.querySelector('#attack');
    // let defenseEl = document.querySelector('#defense');
    // let speedEl = document.querySelector('#speed');
    // let pokedex = draftbtnEl.getAttribute('name');
    // let pokemon_name = document.querySelector("#poke-name").textContent;
    // let pokemon_pic = pokeImgEl.getAttribute("src");
    // let hp = hpEl.getAttribute("aria-valuenow");
    // let attack = attackEl.getAttribute("aria-valuenow");
    // let defense = defenseEl.getAttribute("aria-valuenow");
    // let speed = speedEl.getAttribute("aria-valuenow");

//     console.log(pokedex,
//         pokemon_name,
//         pokemon_pic,
//         hp,
//         attack,
//         defense,
//         speed);

//     if (pokeTeam.length < 6 && !pokeTeam.includes(pokedex)) {
//         pokeTeam.push(pokedex);
//         // include fetch function to check if the team has more than 6 pokemon
    
//         const response = fetch(`/api/pokemons`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 pokedex,
//                 pokemon_name,
//                 pokemon_pic,
//                 hp,
//                 attack,
//                 defense,
//                 speed
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             if (response.ok) {
//                 event.target.disabled = true;
//                 event.target.innerText = "Already Drafted!"
//             } 
//         })
//         .catch (e => {
//         console.log(e);
//         alert(response.statusText);
//     })
// }
// };

// // Event listner for click
// document.querySelector(".listen").addEventListener('click', pokemonDraftHandler);

// // Function to reset the variables
// function resetValues() {
//     draftbtnEl.innerText = "";
//     pokemon_name.innerText = "";
//     pokemon_pic.innerText = "";
//     hp.innerText = "";
//     attack.innerText = "";
//     defense.innerText = "";
//     speed.innerText = "";

//     console.log(pokedex,
//         pokemon_name,
//         pokemon_pic,
//         hp,
//         attack,
//         defense,
//         speed);
// };

// resetValues();