const {Band} = require('./Band')
const { db } = require('./db')
const {Musician} = require('./Musician')
const {Fan} = require('./fans')

Musician.belongsTo(Band, {as: 'Member'})
Band.hasMany(Musician, {foreignKey: 'memberId'})

Fan.belongsToMany( Band,  {through: 'Devotion', as: 'fan'})
Band.belongsToMany(Fan, {through: 'Devotion'})



module.exports = {
    Band,
    Musician,
    Fan
};
