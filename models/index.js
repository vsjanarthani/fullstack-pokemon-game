// import models
const User = require('./User');
const Pokemon = require('./Pokemon');
const Poketype = require('./Poketype');
const Abilities = require('./Abilities');
const Highscore = require('./Highscore');

// Model Associations
Pokemon.hasMany(Poketype);
Pokemon.hasMany(Abilities);
Highscore.belongsTo(User, {foreignKey: `user_id`});

module.exports = {
User,
Pokemon,
Poketype,
Abilities,
Highscore
};
