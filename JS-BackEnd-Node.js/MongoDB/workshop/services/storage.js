const Cube = require('../models/Cube');
const Comment = require('../models/Comment');

async function init() {
    return (req, res, next) => {
        req.storage = {
          getAll,
          getById,
          create,
          createComment
        };
        next();
    }
}

async function getAll(query) {
    const options = {}
    
    if (query.search) {
       options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficulty = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficulty = options.difficulty || {};
        options.difficulty.$lte = Number(query.to);
    }

    const cubes = Cube.find(options).lean();
    return cubes;
}

async function getById(id) {
    const cube = await Cube.findById(id).populate('comments').lean();
    if (cube) {
        console.log(cube);
        return cube;
    }else {
        return undefined;
    }
}

async function create(cube) {
    const record = new Cube(cube);
    return record.save();
}

async function createComment(cubeId, comment) {
    const cube = await Cube.findById(cubeId);

    if (!cube) {
        throw new ReferenceError('No cube with this ID in the DB');
    }

    const newComment = new Comment(comment);
    const testSave = await newComment.save();
    console.log(testSave);

    cube.comments.push(newComment);
    const testSave2 = await cube.save();
    console.log(testSave2);
}

module.exports = {
  init,
  getAll,
  getById,
  create,
  createComment
};