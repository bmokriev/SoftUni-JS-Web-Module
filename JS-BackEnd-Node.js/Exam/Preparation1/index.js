const express = require('express');
const hbs = require('express-handlebars');

const {PORT} = require('./config');
const dbConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes')

const authMiddleware = require('./middlewares/auth');

start();

async function start() {
    const app = express();
    
    await dbConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.get('/', (req, res) => {
        res.send('it wooooorks!')
    });

    app.listen(PORT, () => {
        // testAuth();
        console.log('App started on port ', PORT)
    });
}

// async function testAuth() {
//     const reqMock = {};
//     const resMock = {
//         cookie() {
//             console.log('set cookie',arguments);
//         }
//     }
//     const nextMock = () => {};

//   try {
//       const auth = authMiddleware();
//       auth(reqMock, resMock, nextMock);

//       await reqMock.auth.login('john', '1231230')
//   } catch (err) {
//       console.log('>>> Error:', err.message);
//   }
// }