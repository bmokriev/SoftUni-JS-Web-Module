const express = require('express');
const hbs = require("express-handlebars");
const { notfound } = require('./controllers/404');
const {about} = require('./controllers/about');
const {catalog} = require('./controllers/catalog');
const {create, post} = require('./controllers/create');
const {details} = require('./controllers/details');
const { init: storage} = require('./models/storage')

start()

async function start() {
    const app = express();
    app.engine('.hbs', hbs({
    extname: '.hbs'
    }))

    app.set("view engine", ".hbs");
    app.use(express.static('static'))
    app.use(await storage())
    app.use(express.urlencoded({extended: false}))

    app.get('/', catalog)
    app.get('/details/:id', details)
    app.get('/about', about)
    app.get('/create', create)
    app.post('/create', post)

    app.get("*", notfound);

    app.listen(3000, console.log(`Listening on port 3000`));
}