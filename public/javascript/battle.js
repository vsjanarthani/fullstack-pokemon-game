
//Requiring variables
const socket = io();

let pokemonStats = {};
let opponentPokemonStats

// DOM Selection
const joinBtnEl = document.querySelector('#joinbtn');
const quitBtnEl = document.querySelector('#quitbtn');
const pickEl = document.querySelector('#pick-pokemon');

// Event listener for join room button
if (joinBtnEl) {
  joinBtnEl.addEventListener('click', async event => {
    await fetch('/api/team', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(response => {
        for (let i = 0; i < response.pokemons.length; i++) {
          let baseStats = response.pokemons[i].attack + response.pokemons[i].defense + response.pokemons[i].speed + response.pokemons[i].hp;
          pokemonStats[response.pokemons[i].pokedex] = { name: response.pokemons[i].pokemon_name, stats: baseStats, picked: false, battleState: '' };
        }

        socket.emit('newUser', { teamId: response.id, pokemonStats: pokemonStats });
        //console.log(pokemonStats);
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
    console.log(JSON.stringify(pokeTeamStats));
    // let { id, pokemonStats } = pokeTeamStats;
    for (let id in pokeTeamStats) {
      if (id === socket.id) {
        pokemonStats = pokeTeamStats[id];
      }
      else {
        opponentPokemonStats = pokeTeamStats[id];
      }
        
    }
  });
  console.log(`Your team stats: ${pokemonStats}`);
  console.log(`Opponent team stats: ${opponentPokemonStats}`);
}

socket.on('updatedUsers', pokeTeams => {
  if (Object.keys(pokeTeams).length === 0) {
    alert('Your openent left the battle');
    document.location.replace('/team');
  }
});


if (quitBtnEl) {
  quitBtnEl.addEventListener('click', async event => {

    document.location.replace('/team');
  });
}

// Event listner for clicking on the Pokemon options
let sum = 0;
pickEl.addEventListener('click', event => {
  //console.log(`btn clicked`);
  let id = event.target.attributes.id.value;

  let pickedBtnEl = document.getElementById(`${id}`);
  pickedBtnEl.innerText = "Picked";

  socket.emit("battlingPokemon", { pokedex: id, picked: true });
  socket.on('battleUpdate', battlingPokeTeams => {
    for (let id in battlingPokeTeams) {
      if (id !== socket.id) {
        opponentPokemonStats = battlingPokeTeams[id];
        console.log(opponentPokemonStats);
      }
    }
  })
});


