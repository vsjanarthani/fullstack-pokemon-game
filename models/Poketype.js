const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Pokemon model
class Poketype extends Model {}

Poketype.init(
    {
        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_icon: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'poketype'
    }
);

module.exports = Poketype;