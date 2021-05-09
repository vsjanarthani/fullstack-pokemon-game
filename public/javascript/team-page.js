// DOM Selection
const removebtnEl = document.querySelector('#remove-pokemon');

// Event listener for remove pokemon button
if (removebtnEl) {
    console.log(removebtnEl);
    removebtnEl.addEventListener('click', async event => {
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