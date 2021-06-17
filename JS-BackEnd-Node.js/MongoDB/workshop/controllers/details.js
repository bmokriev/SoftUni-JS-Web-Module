const { getById } = require("../services/storage");

module.exports = {
  details: async (req, res) => {
    const cube = await getById(req.params.id);

    if (cube == undefined) {
      res.redirect('/404');
    } else {
      res.render("details", { title: "Cube Details", cube });
    }
  },
  async attach(req, res) {
    const cube = await getById(req.params.id);
    const accessories = await req.storage.getAllAccessoaries();

    res.render('attach', {
      title: 'Attach Stickers',
      cube,
      accessories
    })
  }
};
