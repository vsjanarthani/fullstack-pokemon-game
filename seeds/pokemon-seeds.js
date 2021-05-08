const { Pokemon } = require('../models');

const pokemonData = [
  {
    pokedex: '001',
    pokemon_name: 'Bulbasaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 45, 
    attack: 49,
    defense: 49,
    speed: 45,
    user_id:'0a9213f9-003e-4fba-9837-e23756924e99'
  },
  {
    pokedex: '002',
    pokemon_name: 'Ivysaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 60, 
    attack: 62,
    defense: 63,
    speed: 60,
    user_id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    pokedex: '003',
    pokemon_name: 'Venusaur',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 80, 
    attack: 82,
    defense: 83,
    speed: 80,
    user_id:'0a9213f9-003e-4fba-9837-e23756924e99'
  },
  {
    pokedex: '004',
    pokemon_name: 'Charmander',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088362/004_tzbv4e.png',
    hp: 39, 
    attack: 52,
    defense: 43,
    speed: 65,
    user_id:'0a9213f9-003e-4fba-9837-e23756924e99'
  },
  {
    pokedex: '005',
    pokemon_name: 'Charmeleon',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 58, 
    attack: 64,
    defense: 58,
    speed: 80,
    user_id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    pokedex: '006',
    pokemon_name: 'Charizard',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 78, 
    attack: 84,
    defense: 78,
    speed: 100,
    user_id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    pokedex: '007',
    pokemon_name: 'Squirtle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088367/007_ooqqgu.png',
    hp: 44, 
    attack: 48,
    defense: 65,
    speed: 43,
    user_id:'557f5ae0-7760-4305-b2b1-40f72a082f0e'
  },
  {
    pokedex: '008',
    pokemon_name: 'Wartortle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 59, 
    attack: 63,
    defense: 80,
    speed: 58,
    user_id:'557f5ae0-7760-4305-b2b1-40f72a082f0e'
  },
  {
    pokedex: '009',
    pokemon_name: 'Blastoise',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 79, 
    attack: 83,
    defense: 100,
    speed: 78,
    user_id:'557f5ae0-7760-4305-b2b1-40f72a082f0e'
  },
  {
    pokedex: '010',
    pokemon_name: 'Caterpie',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 45, 
    attack: 30,
    defense: 35,
    speed: 45,
    user_id:'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    pokedex: '011',
    pokemon_name: 'Metapod',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 50, 
    attack: 20,
    defense: 55,
    speed: 30,
    user_id:'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    pokedex: '012',
    pokemon_name: 'Butterfree',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 60, 
    attack: 45,
    defense: 50,
    speed: 70,
    user_id:'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    pokedex: '013',
    pokemon_name: 'Weedle',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 40, 
    attack: 35,
    defense: 30,
    speed: 50,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
  {
    pokedex: '014',
    pokemon_name: 'Kakuna',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 45, 
    attack: 25,
    defense: 50,
    speed: 35,
    user_id:'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    pokedex: '015',
    pokemon_name: 'Beedrill',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 65, 
    attack: 90,
    defense: 40,
    speed: 75,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
  {
    pokedex: '016',
    pokemon_name: 'Pidgey',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 40, 
    attack: 45,
    defense: 40,
    speed: 56,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
  {
    pokedex: '017',
    pokemon_name: 'Pidgeotto',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 63, 
    attack: 60,
    defense: 55,
    speed: 71,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
  {
    pokedex: '018',
    pokemon_name: 'Pidgeot',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 83, 
    attack: 80,
    defense: 75,
    speed: 101,
    user_id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    pokedex: '019',
    pokemon_name: 'Rattata',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 30, 
    attack: 56,
    defense: 35,
    speed: 72,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
  {
    pokedex: '020',
    pokemon_name: 'Raticate',
    pokemon_pic: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    hp: 55, 
    attack: 81,
    defense: 60,
    speed: 97,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  },
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
