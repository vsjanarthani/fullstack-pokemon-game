// import models
const User = require('./User');
const Pokemon = require('./Pokemon');
const Team = require('./Team');
const Highscore = require('./Highscore');

// Model Associations
User.hasOne(Team, { foreignKey: 'user_id' });

Team.belongsTo(User, { foreignKey: 'user_id' });

Team.hasMany(Pokemon);

Pokemon.belongsTo(Team, { foreignKey: 'team_id' });

Highscore.belongsTo(User, { foreignKey: `user_id` });


// export models
module.exports = {
    User,
    Pokemon,
    Team,
    Highscore
};
