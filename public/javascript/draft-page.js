
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
        // console.log(count);
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
            if (response.ok) {
                alert(`Pokemon Draft Completed!`);
                document.location.replace('/team');
            } 
            // else (disable all buttons)
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


// to do
//* draftpage.js
// 1. Event listener for clear draft button Jana
// 2. Already drafted, should say already drafted, not dependant on button click Megan
//    and compare pokedex from database to pokeapi to "already drafted"
// 3. if logged in but no team, disable functionality Jana
// 4. if dbTeam[1] <0, then disable draft buttons. Megan/Jana

//* teampage.js (also .hbs)
//1. create a form for team creating **team name/team-logo (.hbs) Sarah
//2. button click listener for create team (do a post request for .html route team (/team)) Sarah

//* draftpage-route
//1. fetch request from our pokedex and compare to the random 20 so we don't repeat. 
//2. time issue-every 24 hours. *Yev

//* change header/nav bar so that options available are only there based on status of user 

//* finally, present! 









