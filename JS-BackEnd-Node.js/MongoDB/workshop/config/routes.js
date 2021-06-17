const { notfound } = require("../controllers/404");
const { about } = require("../controllers/about");
const { catalog } = require("../controllers/catalog");
const { create, post } = require("../controllers/create");
const { details, attach } = require("../controllers/details");
const { post: postComment } = require("../controllers/comments");
const { createAccessory, accessoryPost } = require("../controllers/accessory");

module.exports = (app) => {
  app.get("/", catalog);
  app.get("/details/:id", details);
  app.get("/about", about);
  app.get("/create", create);
  app.post("/create", post);

  app.post('/comments/:cubeId/create', postComment);

  app.get('/accessory/create', createAccessory);
  app.post('/accessory/create', accessoryPost);
  app.get('/details/:id/attach', attach);

  app.get("*", notfound);
};
