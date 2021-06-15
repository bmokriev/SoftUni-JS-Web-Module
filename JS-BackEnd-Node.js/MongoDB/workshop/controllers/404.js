module.exports = {
  notfound: (req, res) => {
    res.render("404", {title:"Not found"});
  },
};
