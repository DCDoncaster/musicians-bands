const {db} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // DONE - test creating a band
        const testBand = await Band.create({
            name: 'Rubber',
            genre: 'Stationary'})
        expect(testBand.name).toBe('Rubber');
        expect(testBand.genre).toBe('Stationary');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: 'John',
            instrument: 'Voice'
        })
        expect(testMusician.name).toBe('John');
        expect(testMusician.instrument).toBe('Voice');
    })
    test('assign musician to a band', async()=>{
       
        const testMusician2 = await Musician.create({
            name:'Peter',
            instrument: 'Voice'
        })
        const testBand2 = await Band.create({
            name: 'Peters Band',
            genre: 'Loud'
        })
        await testBand2.addMusician(testMusician2);

        const assignTest = await Musician.findOne({where:{
            memberId: 'Peters Band'
        }})

        expect(assignTest.memberId).toEqual('Peters Band')
    })



})