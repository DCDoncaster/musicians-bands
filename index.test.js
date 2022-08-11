const {db} = require('./db');
const {Fan,Band, Musician} = require('./index');


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
        // DONE - test creating a musician
        const testMusician = await Musician.create({
            name: 'John',
            instrument: 'Voice'
        })
        expect(testMusician.name).toBe('John');
        expect(testMusician.instrument).toBe('Voice');
    })
    test('can have a fan', async()=>{
        const testFan = await Fan.create({
            name: 'Only Fan',
            Age: 18
        })
        expect(testFan.Age).toBe(18);
        expect(testFan.name).toBe('Only Fan')
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

     //This should show fans being fans of bands - but it doesn't
    test('bands can have fans', async()=>{
        const testFan = await Fan.create({
            name: 'Second Fan',
            Age: 21
        })
        const fansFavourite = await Band.findOne({where: {
            name: 'Rubber'
        }})
        await fansFavourite.addFan(testFan)
        const devTest = await Band.findAll({include: {
            model: Fan,
            as: 'Fans',
            where: {
                name: 'Second Fan'
            }
        }});

        console.log(devTest[0].name)//
        expect(devTest[0].name).toBe(fansFavourite.name)
    })



})