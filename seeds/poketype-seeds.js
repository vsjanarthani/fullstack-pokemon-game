const { Poketype } = require('../models');

const typeData = [
  {
    type: 'Grass',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  },
  {
    type: 'Poison',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  },
  {
    type: 'Fire',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  },
  {
    type: 'Bug',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  },
  {
    type: 'Normal',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  },
  {
    type: 'Flying',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  },
  {
    type: 'Water',
    type_icon: 'https://res.cloudinary.com/janarthani/image/upload/v1620024159/001_lv7exg.png'
  }
];

const seedPokemontype = () => Poketype.bulkCreate(typeData);

module.exports = seedPokemontype;
