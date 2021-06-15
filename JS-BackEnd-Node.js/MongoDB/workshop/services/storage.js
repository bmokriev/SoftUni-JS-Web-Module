const Cube = require('../models/Cube');
const fs = require('fs/promises')
const uniqid = require('uniqid')

// load and parse data file
// provide ability to:
// - read all entries
// - read single entry
// - create entry
// * - search

let data = {}

// model structure
// "test1": {
// "name": "test1-name",
// "description": "item",
// "image URL": "none",
// "difficulty": "test"
// }

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (err) {
        console.error("Error reading database");
    }
    
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create
        }
        next();
    }
}

async function getAll(query) {
    let cubes = Object
    .entries(data)
    .map(([id, v]) => Object.assign({}, { id }, v));

    if (query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        cubes = cubes.filter((c) => Number(c.difficulty) >= Number(query.from));
    }
    if (query.to) {
        cubes = cubes.filter((c) => Number(c.difficulty) <= Number(query.to));
    }

    return cubes;
}

async function getById(id) {
    return data[id]
}

async function create(cube) {
    const record = new Cube(cube);
    return record.save();
}

// async function search(str, minD, maxD) {
//     // vikash getALL
//     // filter po min i max
//     //filter po ime 

//     const cubes  = await getAll();
//     const result = cubes
//     //   .filter((i) => Number(i.difficulty) >= minD)
//       .filter((x) => Number(x.difficulty) <= maxD);
//     console.log('test');
    
//     return cubes
// }

module.exports = {
    init,
    getAll,
    getById,
    create
}