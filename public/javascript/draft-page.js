
// DOM Selection
let PokemonBtnEl = document.querySelector("#listen");
const pokeTeam = []
const draftTeamBtnEl = document.querySelector('#draft-team');

// console.log (pokeTeam);

// Listening for button click to draft each pokemon
PokemonBtnEl.addEventListener("click", (event) => {
    let buttonId = event.target.id;
    if (pokeTeam.length < 6 && !pokeTeam.includes(buttonId) && buttonId != "") {
        let thisButton = document.getElementById(`${buttonId}`);
        thisButton.disabled = true;
        thisButton.innerText = "Already Drafted!"
        pokeInfo = buttonId.split(" ");
        let thisPokemon = {
            pokedex: pokeInfo[0],
            pokemon_name: pokeInfo[1],
            pokemon_pic: pokeInfo[2],
            hp: pokeInfo[3],
            attack: pokeInfo[4],
            defense: pokeInfo[5],
            speed: pokeInfo[6],
            team_id: '4a5a129a-f0e4-4529-a1ff-f8cea4d65998'
            // find a way to include team id in the array to bulk create
        }
        pokeTeam.push(thisPokemon);
        console.log(pokeTeam);
    }

});

draftTeamBtnEl.addEventListener('click', event => {
    event.preventDefault();
   const response = fetch(`/api/pokemons/team`, {
        method: 'POST',
        body: JSON.stringify({
            pokeTeam
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .then (response => {
        console.log(response);
            if (response.status == 200) {
                alert(`Pokemon Draft Completed!`);
            }
        })
        .catch(e => {
            console.log(e);
            alert(response.statusText);
        });

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

    // if (pokeTeam.length < 6 && !pokeTeam.includes(pokedex)) {
    //     pokeTeam.push(pokedex);
    //     // include fetch function to check if the team has more than 6 pokemon


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