const {Band} = require('./Band')
const { db } = require('./db')
const {Musician} = require('./Musician')


Musician.belongsTo(Band, {as: 'Member'})
Band.hasMany(Musician, {foreignKey: 'memberId'})



async function test(){
    await db.sync({force: true})
const Paul = await Musician.create({
    name: 'Paul',
    instrument: 'Drums'
})
const George = await Musician.create({
    name: 'George',
    instrument: 'Guitar'
})
const Beatles = await Band.create({
    name: 'Beatles',
    genre: 'Rock'})
const Steps = await Band.create({
    name: 'Steps',
    genre: 'Pop'})
        
await Beatles.addMusician(Paul);
await Beatles.addMusician(George);



}


test()
module.exports = {
    Band,
    Musician
};
