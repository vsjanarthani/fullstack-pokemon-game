const seedUsers = require('./user-seeds');
const seedPokemon = require('./pokemon-seeds');
const seedTeamData = require('./team-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPokemon();
  console.log('\n----- POKEMONS SEEDED -----\n');

  await seedTeamData();
  console.log('\n----- TEAMS SEEDED -----\n');

  process.exit(0);
};

seedAll();
