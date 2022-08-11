const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');


const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data1108.sqlite'
})





module.exports = {
    db,
    Sequelize
};
