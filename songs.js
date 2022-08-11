const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');


let Song = db.define('song',{
    name: {
        type: DataTypes.STRING
    },
    Year: {
        type: DataTypes.NUMBER
    }
})

module.exports = {
    Song
};