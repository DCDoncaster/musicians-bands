// const { DataTypes } = require('sequelize/types');
// const {Sequelize, db} = require('./db');


const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');


// DONE - define the Band model
let Band = db.define('band', {
    name: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    }
})

module.exports = {
    Band
};