const router = require('express').Router();

router.get('/create', (req,res) => {
    res.render('hotel/create')
});

router.post('/create', (req, res) => {
    const hotelData = {
        
    }
})

module.exports = router;