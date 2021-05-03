const seedUsers = require('./user-seeds');
const seedPokemon = require('./pokemon-seeds');
const seedPokemontype = require('./poketype-seeds');
const seedAbilities = require('./ability-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPokemon();
  console.log('\n----- POKEMONS SEEDED -----\n');

  await seedPokemontype();
  console.log('\n----- POKEMON TYPES SEEDED -----\n');

  await seedAbilities();
  console.log('\n----- POKEMON ABILITIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
