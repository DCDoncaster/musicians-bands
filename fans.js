const {db} = require('./db')
const {Sequelize, DataTypes} = require('sequelize');


let Fan = db.define('Fan',{
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    Age: {
        type: DataTypes.INTEGER
    }
})

module.exports = {
    Fan
};