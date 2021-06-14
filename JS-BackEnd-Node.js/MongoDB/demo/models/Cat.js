const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: { type: String, required: true, runique: true },
  color: { type: String, required: true },
});
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;