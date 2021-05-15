
//Requiring variables
const socket = io();

let pokemonStats = 0;
let opponentPokemonStats = 0;

// DOM Selection
const joinBtnEl = document.querySelector('#joinbtn');
const quitBtnEl = document.querySelector('#quitbtn');
const pickEl = document.querySelector('#pick-pokemon');
const gradeEl = document.querySelector('#gradebtn');

// Event listener for join room button
if (joinBtnEl) {
  joinBtnEl.addEventListener('click', async event => {
    await fetch('/api/team', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(response => {
        let totalStats = 0;
        for (let i = 0; i < response.pokemons.length; i++) {
          totalStats = totalStats + response.pokemons[i].attack + response.pokemons[i].defense + response.pokemons[i].speed + response.pokemons[i].hp;
        }
        //console.log(totalStats);
        socket.emit('newUser', { teamId: response.id, pokemonStats: totalStats });

        socket.on('updatedUsers', pokeTeams => {
          for (let id in pokeTeams) {
            if (id !== socket.id) {
              document.location.replace(`/battle?id=${pokeTeams[id]}`);
            }
          }
        });
      })
      .catch(e => {
        console.log(e);
      });
  });
}

if (document.location.href.indexOf("?id=") > -1) {
  console.log('page has been reloaded');
  socket.emit('getUserStats', 'dummyData');
  socket.on('updateUserStats', pokeTeamStats => {
    // pokeTeamStats = JSON.stringify(pokeTeamStats);
    for (let id in pokeTeamStats) {
      if (document.location.href.indexOf(id) > -1) {
        pokemonStats = pokeTeamStats[id];
      }
      else {
        opponentPokemonStats = pokeTeamStats[id];
      }

    }
  });
}

socket.on('updatedUsers', pokeTeams => {
  if (Object.keys(pokeTeams).length === 0) {
    alert('Your openent left the battle');
    document.location.replace('/team');
  }
});


if (quitBtnEl) {
  quitBtnEl.addEventListener('click', event => {

    document.location.replace('/team');
  });
}


// Event listener for grade team button
if(gradeEl) {
gradeEl.addEventListener('click', event => {
  console.log("Your team power:" + pokemonStats);
  console.log("Your opponent power: " + opponentPokemonStats);
  if (pokemonStats > opponentPokemonStats) {
    alert("Your team is stronger than your opponent");
  } else if (pokemonStats < opponentPokemonStats){
    alert("Your opponent has a stronger team");
  } else {
    alert("Both your teams are equally strong!");
  }
});
}
// Event listner for clicking on the Pokemon options
// pickEl.addEventListener('click', event => {
//   //console.log(`btn clicked`);
//   let id = event.target.attributes.id.value;

//   let pickedBtnEl = document.getElementById(`${id}`);
//   pickedBtnEl.innerText = "Picked";
// });


