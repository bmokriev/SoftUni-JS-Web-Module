const layout = require('../views/layout');

const html = `
<div>
<h1>About</h1>
<p>About page text</p>
</div>
`;

module.exports = (req, res) => {
  res.write(layout(html, "About"));
  res.end();
}
