const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Abilities model
class Abilities extends Model {}

Abilities.init(
    {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        ability: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'abilities'
    }
);

module.exports = Abilities;