const { Pokemon } = require('../models');

// creating pokemon seed 
const pokemonData = [
  {
    pokedex: '001',
    pokemon_name: 'Bulbasaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 45, 
    attack: 49,
    defense: 49,
    speed: 45,
    team_id:'b5296bda-df8d-428a-8386-f2a14e992ad2'
  },
  {
    pokedex: '002',
    pokemon_name: 'Ivysaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 60, 
    attack: 62,
    defense: 63,
    speed: 60,
    team_id:'b5296bda-df8d-428a-8386-f2a14e992ad2'
  },
  {
    pokedex: '003',
    pokemon_name: 'Venusaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 80, 
    attack: 82,
    defense: 83,
    speed: 80,
    team_id:'f1b559f4-d6bd-4cfa-bb59-df1a0156cedd'
  },
  {
    pokedex: '004',
    pokemon_name: 'Charmander',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088362/004_tzbv4e.png',
    hp: 39, 
    attack: 52,
    defense: 43,
    speed: 65,
    team_id:'f1b559f4-d6bd-4cfa-bb59-df1a0156cedd'
  },
  {
    pokedex: '005',
    pokemon_name: 'Charmeleon',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 58, 
    attack: 64,
    defense: 58,
    speed: 80,
    team_id:'b5296bda-df8d-428a-8386-f2a14e992ad2'
  },
  {
    pokedex: '006',
    pokemon_name: 'Charizard',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 78, 
    attack: 84,
    defense: 78,
    speed: 100,
    team_id:'b5296bda-df8d-428a-8386-f2a14e992ad2'
  },
  {
    pokedex: '007',
    pokemon_name: 'Squirtle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088367/007_ooqqgu.png',
    hp: 44, 
    attack: 48,
    defense: 65,
    speed: 43,
    team_id:'f1b559f4-d6bd-4cfa-bb59-df1a0156cedd'
  },
  {
    pokedex: '008',
    pokemon_name: 'Wartortle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 59, 
    attack: 63,
    defense: 80,
    speed: 58,
    team_id:'f1b559f4-d6bd-4cfa-bb59-df1a0156cedd'
  },
  {
    pokedex: '009',
    pokemon_name: 'Blastoise',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 79, 
    attack: 83,
    defense: 100,
    speed: 78,
    team_id:'2c44cb54-05d0-4c3d-b1d3-9a897cb073dc'
  },
  {
    pokedex: '010',
    pokemon_name: 'Caterpie',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 45, 
    attack: 30,
    defense: 35,
    speed: 45,
    team_id:'2c44cb54-05d0-4c3d-b1d3-9a897cb073dc'
  },
  {
    pokedex: '011',
    pokemon_name: 'Metapod',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 50, 
    attack: 20,
    defense: 55,
    speed: 30,
    team_id:'2c44cb54-05d0-4c3d-b1d3-9a897cb073dc'
  },
  {
    pokedex: '012',
    pokemon_name: 'Butterfree',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 60, 
    attack: 45,
    defense: 50,
    speed: 70,
    team_id:'2c44cb54-05d0-4c3d-b1d3-9a897cb073dc'
  },
  {
    pokedex: '013',
    pokemon_name: 'Weedle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 40, 
    attack: 35,
    defense: 30,
    speed: 50,
    team_id:'4a5a129a-f0e4-4529-a1ff-f8cea4d65998'
  },
  {
    pokedex: '014',
    pokemon_name: 'Kakuna',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 45, 
    attack: 25,
    defense: 50,
    speed: 35,
    team_id:'4a5a129a-f0e4-4529-a1ff-f8cea4d65998'
  },
  {
    pokedex: '015',
    pokemon_name: 'Beedrill',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 65, 
    attack: 90,
    defense: 40,
    speed: 75,
    team_id:'bca48c72-36d3-4866-9f54-bd041b5f7d02'
  },
  {
    pokedex: '016',
    pokemon_name: 'Pidgey',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 40, 
    attack: 45,
    defense: 40,
    speed: 56,
    team_id:'bca48c72-36d3-4866-9f54-bd041b5f7d02'
  },
  {
    pokedex: '017',
    pokemon_name: 'Pidgeotto',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 63, 
    attack: 60,
    defense: 55,
    speed: 71,
    team_id:'bca48c72-36d3-4866-9f54-bd041b5f7d02'
  },
  {
    pokedex: '018',
    pokemon_name: 'Pidgeot',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 83, 
    attack: 80,
    defense: 75,
    speed: 101,
    team_id:'2c44cb54-05d0-4c3d-b1d3-9a897cb073dc'
  },
  {
    pokedex: '019',
    pokemon_name: 'Rattata',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 30, 
    attack: 56,
    defense: 35,
    speed: 72,
    team_id:'bca48c72-36d3-4866-9f54-bd041b5f7d02'
  },
  {
    pokedex: '020',
    pokemon_name: 'Raticate',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 55, 
    attack: 81,
    defense: 60,
    speed: 97,
    team_id:'2c44cb54-05d0-4c3d-b1d3-9a897cb073dc'
  },
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
