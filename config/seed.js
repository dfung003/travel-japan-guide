require('dotenv').config();
require('./database');

const Destination = require('../models/Article');


(async function () {

    await Destination.deleteMany({});
    const destinations = await Destination.create([
        { name: 'Tokyo', description: 'Tokyo', population: 60000 },
        { name: 'Kyoto', description: 'Kyoto', population: 30000 },
        { name: 'Osaka', description: 'Osaka', population: 40000 }
    ]);

    console.log(destinations)

    process.exit();

})();