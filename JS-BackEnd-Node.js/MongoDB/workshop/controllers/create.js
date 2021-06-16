module.exports = {
  create: (req, res) => {
    res.render("create", { title: "Crete Cube" });
  },
  post: async (req, res) => {
    console.log(req.body);
    const cube = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      difficulty: Number(req.body.difficultyLevel),
    };

    try {
        await req.storage.create(cube);
    } catch (err) {
      return res.render('create', { title: 'Create Cube', error: 'All fields are required'})
    }
    

    res.redirect('/');
  }
};
