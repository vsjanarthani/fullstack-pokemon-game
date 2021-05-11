// DOM Selection
let PokemonBtnEl = document.querySelector("#listen");
const removebtnEl = document.querySelector('#remove-pokemon');
const createTeamEl = document.querySelector('#create-team');
const teamNameEl = document.querySelector('#team-name');
const teamLogoEl = document.querySelector('#team-logo');


// let namePokeBtnEl = document.querySelector("#pokeTeamNaming");
// need selector for logo as well

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
    const team_logo = teamLogoEl.value
    console.log(teamNameEl.value);
    console.log(teamLogoEl.value);
    console.log(teamNameEl[0].innerText);
    console.log(teamLogoEl[0].innerText);
    console.log(team_name);
    console.log(team_logo);
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




// Event Listener for the NAME pokemon team function started
// should run random name generator
// if (namePokeBtnEl) {
//   console.log(namePokeBtnEl);
//   namePokeBtnEl.addEventListener('click', async event => {
//
// SETTING TEAM NAME team.team_name}
//       // const id = event.target.name;
//       // const response = await fetch(``, {
//       //     method: 'POST'
//         });
      
//         if (response.ok) {
//           document.location.reload('/team');
//         } else {
//           alert(response.statusText);
//         }
// //   })
// // }
//  LOGIC FOR THE RANDOM NAME GENERATOR
// var teamBuild = [
//   '"The "+nameTeam(adjective)+" "+nameTeam(legendary)',
//   'nameTeam(adjective)+" "+nameTeam(pokeCity)',
//   '"2 "+nameTeam(adjective)+" 2 "+nameTeam(attack)',
//   'nameTeam(adjective)+" 4 Lyfe"',
//   '"Team "+nameTeam(adjective)',
//   '"Team "+nameTeam(legendary)',
//   '"Team "+nameTeam(pokeCity)',
//   'nameTeam(legendary)+" With "+nameTeam(legendary)',
//   'nameTeam(legendary)+" From "+nameTeam(pokeCity)',
//   'nameTeam(legendary)+" "+nameTeam(attack)',
//   'nameTeam(legendary)+" Don’t "+nameTeam(attack)',
//   'nameTeam(pokeCity)+" "+nameTeam(legendary)',
//   'nameTeam(pokeCity)+"’s "+nameTeam(adjective)+" "+nameTeam(legendary)',
//   'nameTeam(pokeCity)+"’s Potions"',
//   'nameTeam(attack)+" & "+nameTeam(attack)',
//   '"Level Up & "+nameTeam(attack)',
//  ],
//  adjective = [ // madlib words https://studentsandwriters.com/2018/02/09/funny-mad-libs-word-lists-adjectives-nouns-and-verbs-2/
//    'Confused','Demanding', 'Ultimate', 'Drunken','Greedy','Hyperactive','Misunderstood','Out-of-Control','Rebellious','Territorial','Useless','Sassy','Salty','Hungry','Grumpy','Top-Secret','Barely Qualified','YOLO','Litty','Top-Secret','Major Key', '#Winning','Trill','#Winning','Too Cool'
//  ],
//  legendary = [ // Legendary Pokemon https://pokemongo.fandom.com/wiki/Legendary_Pok%C3%A9mon
//    'Articunos','Zapdos', 'Mew Twos', 'Raikous', 'Enteis', 'Suicunes',  'Cobalions', 'Tornadus', 'Thundurus', 'Landorus', 'Moltres'
//  ],
//  pokeCity = [ // Locations in pokemon world https://bulbapedia.bulbagarden.net/wiki/List_of_locations_by_name
//    'Abandoned Ship','Artisan Cave','Cave of Being','Citadark Isle','Dark Cave','Dreamyard','Eterna Forest','Flower Paradise','Giant Mirror','Gnarled Den','Lake of Rage','Outcast Island'
//  ],
//  attack = [ // Pokemon moves https://bulbapedia.bulbagarden.net/wiki/List_of_moves
//    'Double Slap','Mega Kick','Pay Day','Slam','Stomp','Fire Punch','Vine Whip','Fly','Thrash','Roar','Growl','Acid','Sonic Boom','Headbutt'
//  ];
// function nameTeam(id){
// return id[Math.floor(Math.random()*id.length)]
// }
// CHANGE THIS TO SELECT ONE OR JUST AS AN INSPIRATION BOX (?)
// function pokeTeamName(){
// var ul = document.getElementsByTagName('ul')[0];
// ul.insertAdjacentHTML('afterBegin','<li>'+eval(teamBuild[Math.floor(Math.random()*teamBuild.length)])+'</li>')
// }
// for (i=0;i<5;i++){
// pokeTeamName()
// }



// to do
// Event listener for create team and its forms
