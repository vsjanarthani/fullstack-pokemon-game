
// DOM Selection & Global variable assignment
let PokemonBtnEl = document.querySelector("#listen");
const draftTeamBtnEl = document.querySelector('#draft-team');
const clearDraftBtnEl = document.querySelector('#draft-clear');
// const draftMeBtnEl = PokemonBtnEl.getAttribute('name');
let pokeTeam = [];
let dbTeam = [];
let num;
let team_id;
let pokemons;


// Fetch team id and pokemon count
fetch("/api/team")
    .then(response => response.json())
    .then(data => {
        team_id = data.id;
        // let pokemons = data.pokemons;
        let count = 6 - (data.pokemons.length);
        console.log(count);
        dbTeam.push(team_id);
        dbTeam.push(count);
    })
    .catch(e => {
        console.log(e);
        alert(response.statusText);
    });

console.log(dbTeam);


// Event listenr for button click to draft each pokemon
PokemonBtnEl.addEventListener("click", (event) => {
    let buttonId = event.target.id;
    if (pokeTeam.length < dbTeam[1] && !pokeTeam.includes(buttonId) && buttonId != "") {
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
            team_id: dbTeam[0],
            selected: true
        }
        pokeTeam.push(thisPokemon);
        console.log(pokeTeam);
    }

});

// Event listner for draft team button
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
                // return response.json();
                if (response.ok) {
                    alert(`Pokemon Draft Completed!`);
                    document.location.replace('/team');
                }
            })
            // .then (response => {
            // console.log(response);
            // })
            .catch(e => {
                console.log(e);
                alert(response.statusText);
            });
    });


// Event listener for Clear draft button
clearDraftBtnEl.addEventListener('click', event => {
        pokeTeam = [];
        let allBtns = PokemonBtnEl.getElementsByTagName('button');
        for (let i = 0; i < allBtns.length; i++) {
            if (allBtns[i].textContent == 'Already Drafted!') {
                allBtns[i].disabled = false;
                allBtns[i].innerText = "Draft Me";
            }
          }
});







