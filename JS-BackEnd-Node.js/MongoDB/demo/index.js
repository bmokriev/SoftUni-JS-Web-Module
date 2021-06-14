// const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Person = require('./models/Person');

start();

async function start() {
        const connectionStr = 'mongodb://localhost:27017/test';
    const client = mongoose.connect(connectionStr, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

    console.log('DB connected');

   const person = new Person ({
       age: -5
   })

   try {
       await person.save();
   } catch (err) {
       console.error(err.message);
   }
   

    // const person1 = new Person({
    //   firstName: 'Ivan',
    //   lastName: 'Ivanov',
    //   age: 20,
    // });
    // const person2 = new Person({
    //   firstName: 'Martin',
    //   lastName: 'Petrov',
    //   age: 35,
    // });

    // await person1.save();
    // await person2.save();

    // const people = await Person.find({});
    // people.forEach(e => e.sayHi());
    // people.map(p => p.fullName).forEach(n => console.log(n));

}



// client.connect((err) => {
//     if (err != null) {
//        console.error('Something unexpected happend with db'); 
//        return;
//     }

//     console.log('database connected');

//     const db = client.db('test');
//     const collection = db.collection('cats');
// })