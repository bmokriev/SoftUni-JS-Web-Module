const path = require('path');

const express = require('express');
const catalogRouter = require('./catalog');
const logger = require('./logger');

const app = express();

app.use('/static', express.static('static'));

app.use(catalogRouter);
app.use(logger)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
})



app.listen(3000, () => console.log("Server started on 3000"));
// app.post('/post', (req, res) => {
//     res.send('posting request')
// })
// app.route('/route')
// .get((req, res) => {
//     res.send('get get request')
// })
// .post((req, res) => {
//     res.status(201)
//     res.send('post post request')
// })

// app.get('/dow',(req, res) => {
//     res.sendFile(__dirname + '/static/index.html')
// })


// app.get('/id/:id', (req, res) => {
//     res.send(req.params.id)
// })
