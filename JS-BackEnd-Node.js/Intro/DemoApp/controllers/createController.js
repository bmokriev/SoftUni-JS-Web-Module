const formidable = require('formidable')
const database = require('../util/database');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        console.log('create item');
        console.log(fields);
        database.addItem(fields);
        res.writeHead(301, {
        'Location': '/catalog'
        });
        res.end();
    })

    
}