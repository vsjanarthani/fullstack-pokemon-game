
//Requiring variables
const socket = io();

// DOM Selection
const joinRoomBtnEl = document.querySelector('#join-room');

// Event listener for join room button
joinRoomBtnEl.addEventListener('click', async event => {
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





