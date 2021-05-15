
//Requiring variables
const socket = io();

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
        console.log(response);
        socket.emit('newUser', response.id);
        socket.on('updatedUsers', pokeTeams => {
          for (let id in pokeTeams) {
            if(id !== socket.id) {
              document.location.replace(`/battle?id=${pokeTeams[id]}`);
            }
          }
        });
    })  
    .catch (e => {
      console.log(e);
    });   
});
}

socket.on('updatedUsers', pokeTeams => {
  if(Object.keys(pokeTeams).length === 0) {
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
  console.log(`btn clicked`);
  let id = event.target.attributes.id.value;
  let stats = event.target.attributes.name.value;
  let result = stats.split('-').join(', ').split(',');
 for (let i=0; i<result.length; i++) {
  sum = parseInt(result[i]) + sum
 }
  // console.log(id, stats, sum);
  const pickedBtnEl = document.getElementById(`${id}`);
  pickedBtnEl.innerText = "Picked";
  
});

