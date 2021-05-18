const handlers = {};

function match(url) {
  const handler = handlers[url];

  if (handler == undefined) {
    return defaultHandler;
  } else {
    return handler;
  }
}

function registerHandler(url, handler) {
  handlers[url] = handler;
}

function defaultHandler(url, res) {
  res.statusCode = 404;
  res.write("Not found");
  res.end();
}

module.exports = {
  registerHandler,
  match,
};
