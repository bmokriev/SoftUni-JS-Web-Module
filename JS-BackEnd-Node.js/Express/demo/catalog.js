const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.send('Catalog page')
})

data = {
    name: 'Ivan',
    age: 23
}

router.post('/catalog', (req, res) => {
    res.json(data)
})

module.exports = router;