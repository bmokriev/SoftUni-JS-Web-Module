const express = require('express');
const { init: storage} = require('./services/storage')
const expresConfig = require('./config/express');
const routesConfig = require('./config/routes');
const dbConfig = require('./config/database')

start()

async function start() {
    const app = express();
    
    expresConfig(app);
    await dbConfig(app);

    app.use(await storage())
    routesConfig(app);

    app.listen(3000, console.log(`Listening on port 3000`));
}