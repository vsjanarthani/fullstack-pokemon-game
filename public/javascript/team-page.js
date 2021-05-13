// DOM Selection
let PokemonBtnEl = document.querySelector("#listen");
const removebtnEl = document.querySelector('#remove-pokemon');
const createTeamEl = document.querySelector('#create-team');
const teamNameEl = document.querySelector('#team-name');
const teamLogoEl = document.querySelector('#team-logo');


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

// Event listener for create team button
if (createTeamEl) {
  createTeamEl.addEventListener('click', async event => {
    event.preventDefault();
    const team_name = teamNameEl.value;
    const team_logo = teamLogoEl.value;
    const response = await fetch(`/team`, {
        method: 'POST',
        body: JSON.stringify({
          team_name,
          team_logo
      }),
      headers: {
          'Content-Type': 'application/json'
      }
      });
    
      if (response.ok) {
        document.location.reload('/team');
      } else {
        alert(response.statusText);
      }
})
}

$('#myCarousel').carousel({
  interval: false
});
$('#carousel-thumbs').carousel({
  interval: false
});

$('[id^=carousel-selector-]').click(function() {
  var id_selector = $(this).attr('id');
  var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
  $('#myCarousel').carousel(id);
});
// when the carousel slides, auto update
$('#myCarousel').on('slide.bs.carousel', function(e) {
  var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});
// when user swipes, go next or previous
$('#myCarousel').swipe({
  fallbackToMouseEvents: true,
  swipeLeft: function(e) {
    $('#myCarousel').carousel('next');
  },
  swipeRight: function(e) {
    $('#myCarousel').carousel('prev');
  },
  allowPageScroll: 'vertical',
  preventDefaultEvents: false,
  threshold: 75
});

$('#myCarousel .carousel-item img').on('click', function(e) {
  var src = $(e.target).attr('data-remote');
  if (src) $(this).ekkoLightbox();
});