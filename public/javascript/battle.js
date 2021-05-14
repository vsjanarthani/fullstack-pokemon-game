
//Requiring variables
const socket = io();

// DOM Selection
const joinBtnEl = document.querySelector('#joinbtn');

const quitBtnEl = document.querySelector('#quitbtn');

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


// Event listener for quit battle button
if (quitBtnEl) {
  quitBtnEl.addEventListener('click', async event => {
    
    document.location.replace('/team');
  });
}


// To Do
// 1. Add event listner for start battle
// 2. Add event listener for pick me
// 3. Build a pokemon fight/best pokemon/team logic

