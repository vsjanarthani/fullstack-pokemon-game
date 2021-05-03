const { Abilities } = require('../models');

const abilityData = [
  {
    ability: 'Overgrow'
  },
  {
    ability: 'Chlorophyll'
  },
  {
    ability: 'Blaze'
  },
  {
    ability: 'Solar Power'
  },
  {
    ability: 'Torrent'
  },
  {
    ability: 'Rain Dish'
  },
  {
    ability: 'Shield Dust'
  },
  {
    ability: 'Shed Skin'
  },
  {
    ability: 'Run Away'
  },
  {
    ability: 'Compoundeyes'
  },
  {
    ability: 'Tinted Lens'
  },
  {
    ability: 'Swarm'
  },
  {
    ability: 'Sniper'
  },
  {
    ability: 'Keen Eye'
  },
  {
    ability: 'Tangled Feet'
  },
  {
    ability: 'Big Pecks'
  },
  {
    ability: 'Guts'
  },
  {
    ability: 'Hustle'
  }
];

const seedAbilities = () => Abilities.bulkCreate(abilityData);

module.exports = seedAbilities;
