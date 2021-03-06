const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxLength: 500 },
  imageUrl: { type: String, required: true },
  difficulty: { type: Number, required: true, min: 1, max: 6 },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  accessories: [{ type: Schema.Types.ObjectId, ref: "Accessory" }]
});

module.exports = model('Cube', schema); 