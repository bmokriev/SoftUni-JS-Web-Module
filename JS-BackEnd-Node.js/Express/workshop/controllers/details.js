const { getById } = require("../models/storage");

module.exports = {
  details: async (req, res) => {
    const cube = await getById(req.params.id);

    if (cube == undefined) {
      res.redirect('/404');
    } else {
      res.render("details", { title: "Cube Details", cube });
  }

    
  },
};
