const Cube = require('../models/Cube');
const Comment = require('../models/Comment');
const Accessory = require('../models/Accessory');

async function init() {
    return (req, res, next) => {
        req.storage = {
          getAll,
          getById,
          create,
          createComment,
          createAccessory,
          getAllAccessoaries,
          attachSticker,
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
    const cube = await Cube.findById(id)
      .populate("comments")
      .populate("accessories")
      .lean();
    if (cube) {
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
    cube.comments.push(newComment);
    const testSave2 = await cube.save();
}

async function getAllAccessoaries(existing) {
    const accessories = await Accessory.find({ _id: {$nin: existing}}).lean();
    return accessories;
}

async function createAccessory(accessory) {
    const record = new Accessory(accessory);
    return record.save();
}

async function attachSticker(cubeId, stickerId) {
    const cube = await Cube.findById(cubeId);
    const sticker = await Accessory.findById(stickerId)
    if (!cube || !sticker) {
      throw new ReferenceError("No such ID in the DB");
    }

    cube.accessories.push(sticker);
    return cube.save();
}

module.exports = {
  init,
  getAll,
  getById,
  create,
  createComment,
  createAccessory,
  getAllAccessoaries,
  attachSticker,
};