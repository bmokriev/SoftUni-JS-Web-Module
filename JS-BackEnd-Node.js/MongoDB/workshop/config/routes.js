const { notfound } = require("../controllers/404");
const { about } = require("../controllers/about");
const { catalog } = require("../controllers/catalog");
const { create, post } = require("../controllers/create");
const { details } = require("../controllers/details");

module.exports = (app) => {
  app.get("/", catalog);
  app.get("/details/:id", details);
  app.get("/about", about);
  app.get("/create", create);
  app.post("/create", post);

  app.get("*", notfound);
};
