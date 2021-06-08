const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs({
    // partialsDir: './views',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    // res.send('!!!!')
    const data = {
        title: "Main page",
        // user:{
        //     username: "John"
        // },
        name:'Gosho',
        age: 23,
        items:[
            "Lint",
            "Wallet",
            "Phone"
        ]
    }
    res.render('home.hbs', data)
})

app.get('/catalog', (req, res) => {
    res.render('catalog', {products: [
        "Dog", "cat", "Pooper"
    ]})
})

app.listen(3000, () => console.log('connected on 3000'))