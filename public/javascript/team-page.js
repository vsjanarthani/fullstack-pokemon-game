// DOM Selection
let PokemonBtnEl = document.querySelector("#listen");
const removebtnEl = document.querySelector('#remove-pokemon');

// Event listener for remove pokemon button
if (PokemonBtnEl) {
    console.log(PokemonBtnEl);
    PokemonBtnEl.addEventListener('click', async event => {
        const id = event.target.name;
        const response = await fetch(`/api/pokemons/${id}`, {
            method: 'DELETE'
          });
        
          if (response.ok) {
            document.location.reload('/team');
          } else {
            alert(response.statusText);
          }
    })
}


// to do
// 1. Pokemon Count should be correct.
// 2. Place to add logos
