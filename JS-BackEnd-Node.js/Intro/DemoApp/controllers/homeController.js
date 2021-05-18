const layout = require('../views/layout');

const html = `
<div>
<h1>Welcome!!!</h1>
<p>Home page it is!</p>
</div>
`;

module.exports = (req, res) => {
  res.write(layout(html));
  res.end();
}