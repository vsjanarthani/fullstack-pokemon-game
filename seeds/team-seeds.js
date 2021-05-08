const { Team } = require('../models');

const teamData = [
  {
    team_name: 'Might Warriors',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    user_id:'0a9213f9-003e-4fba-9837-e23756924e99'
  },
  {
    team_name: 'Pikachu Lovers',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    user_id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197'
  },
  {
    team_name: 'Draft Queens',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    user_id:'557f5ae0-7760-4305-b2b1-40f72a082f0e'
  },
  {
    team_name: 'Dragon Fighters',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    user_id:'be88bf2d-e41e-4fa0-937d-7e252cc73404'
  },
  {
    team_name: 'Unbeatables',
    team_logo: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png',
    user_id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648'
  }
];

const seedTeamData = () => Team.bulkCreate(teamData);

module.exports = seedTeamData;
