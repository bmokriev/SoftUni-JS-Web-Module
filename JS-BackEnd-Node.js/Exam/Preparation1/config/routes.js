const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const hotelController = require('../controllers/hotelController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/', homeController);
    app.use('/hotels', hotelController)
}