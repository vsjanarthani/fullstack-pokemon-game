const { Poketype } = require('../models');

const typeData = [
  {
    type: 'Grass',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Poison',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Fire',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Bug',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Normal',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Flying',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Water',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  },
  {
    type: 'Grass',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620088352/001_efpn3l.png'
  }
];

const seedPokemontype = () => Poketype.bulkCreate(typeData);

module.exports = seedPokemontype;
