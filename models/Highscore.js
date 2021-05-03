const { Model, DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../config/connection');

// create Highscore model
class Highscore  extends Model {}

Highscore.init(
    {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        score: {
            type: DataTypes.INTEGER,
            defaultValue: null,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'highscore'
    }
);

module.exports = Highscore ;