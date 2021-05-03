const { Pokemon } = require('../models');

const pokemonData = [
  {
    pokedex: '001',
    pokemon_name: 'Bulbasaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 45, 
    attack: 49,
    defense: 49,
    sp_attack: 65,
    sp_defense: 65,
    speed: 45
  },
  {
    pokedex: '002',
    pokemon_name: 'Ivysaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 60, 
    attack: 62,
    defense: 63,
    sp_attack: 80,
    sp_defense: 80,
    speed: 60
  },
  {
    pokedex: '003',
    pokemon_name: 'Venusaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 80, 
    attack: 82,
    defense: 83,
    sp_attack: 100,
    sp_defense: 100,
    speed: 80
  },
  {
    pokedex: '004',
    pokemon_name: 'Charmander',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 39, 
    attack: 52,
    defense: 43,
    sp_attack: 60,
    sp_defense: 50,
    speed: 65
  },
  {
    pokedex: '005',
    pokemon_name: 'Charmeleon',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 58, 
    attack: 64,
    defense: 58,
    sp_attack: 80,
    sp_defense: 65,
    speed: 80
  },
  {
    pokedex: '006',
    pokemon_name: 'Charizard',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 78, 
    attack: 84,
    defense: 78,
    sp_attack: 109,
    sp_defense: 85,
    speed: 100
  },
  {
    pokedex: '007',
    pokemon_name: 'Squirtle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 44, 
    attack: 48,
    defense: 65,
    sp_attack: 50,
    sp_defense: 64,
    speed: 43
  },
  {
    pokedex: '008',
    pokemon_name: 'Wartortle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 59, 
    attack: 63,
    defense: 80,
    sp_attack: 65,
    sp_defense: 80,
    speed: 58
  },
  {
    pokedex: '009',
    pokemon_name: 'Blastoise',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 79, 
    attack: 83,
    defense: 100,
    sp_attack: 85,
    sp_defense: 105,
    speed: 78
  },
  {
    pokedex: '010',
    pokemon_name: 'Caterpie',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 45, 
    attack: 30,
    defense: 35,
    sp_attack: 20,
    sp_defense: 20,
    speed: 45
  },
  {
    pokedex: '011',
    pokemon_name: 'Metapod',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 50, 
    attack: 20,
    defense: 55,
    sp_attack: 25,
    sp_defense: 25,
    speed: 30
  },
  {
    pokedex: '012',
    pokemon_name: 'Butterfree',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 60, 
    attack: 45,
    defense: 50,
    sp_attack: 90,
    sp_defense: 80,
    speed: 70
  },
  {
    pokedex: '013',
    pokemon_name: 'Weedle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 40, 
    attack: 35,
    defense: 30,
    sp_attack: 20,
    sp_defense: 20,
    speed: 50
  },
  {
    pokedex: '014',
    pokemon_name: 'Kakuna',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 45, 
    attack: 25,
    defense: 50,
    sp_attack: 25,
    sp_defense: 25,
    speed: 35
  },
  {
    pokedex: '015',
    pokemon_name: 'Beedrill',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 65, 
    attack: 90,
    defense: 40,
    sp_attack: 45,
    sp_defense: 80,
    speed: 75
  },
  {
    pokedex: '016',
    pokemon_name: 'Pidgey',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 40, 
    attack: 45,
    defense: 40,
    sp_attack: 35,
    sp_defense: 35,
    speed: 56
  },
  {
    pokedex: '017',
    pokemon_name: 'Pidgeotto',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 63, 
    attack: 60,
    defense: 55,
    sp_attack: 50,
    sp_defense: 50,
    speed: 71
  },
  {
    pokedex: '018',
    pokemon_name: 'Pidgeot',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 83, 
    attack: 80,
    defense: 75,
    sp_attack: 70,
    sp_defense: 70,
    speed: 101
  },
  {
    pokedex: '019',
    pokemon_name: 'Rattata',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 30, 
    attack: 56,
    defense: 35,
    sp_attack: 25,
    sp_defense: 35,
    speed: 72
  },
  {
    pokedex: '020',
    pokemon_name: 'Raticate',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png',
    hp: 55, 
    attack: 81,
    defense: 60,
    sp_attack: 50,
    sp_defense: 70,
    speed: 97
  },
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
