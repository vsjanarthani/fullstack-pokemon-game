const { Team } = require('../models');

// creating team seed
const teamData = [
  {
    id: 'b5296bda-df8d-428a-8386-f2a14e992ad2',
    team_name: 'Mighty Warriors',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    pokemon_count: 1,
    user_id:'0a9213f9-003e-4fba-9837-e23756924e99'
  },
  {
    id: 'f1b559f4-d6bd-4cfa-bb59-df1a0156cedd',
    team_name: 'Pikachu Lovers',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    pokemon_count: 1,
    user_id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    id: '2c44cb54-05d0-4c3d-b1d3-9a897cb073dc',
    team_name: 'Draft Queens',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    pokemon_count: 1,
    user_id:'557f5ae0-7760-4305-b2b1-40f72a082f0e'
  },
  {
    id: '4a5a129a-f0e4-4529-a1ff-f8cea4d65998',
    team_name: 'Dragon Fighters',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    pokemon_count: 1,
    user_id:'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    id: 'bca48c72-36d3-4866-9f54-bd041b5f7d02',
    team_name: 'Unbeatables',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    pokemon_count: 1,
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  }
];

const seedTeamData = () => Team.bulkCreate(teamData);

module.exports = seedTeamData;
