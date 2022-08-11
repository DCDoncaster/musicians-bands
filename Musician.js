const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');


let Musician = db.define('musician',{
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    },

})

module.exports = {
    Musician
};