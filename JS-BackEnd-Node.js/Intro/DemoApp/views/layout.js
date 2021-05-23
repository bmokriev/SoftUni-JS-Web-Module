module.exports = (html, title = "Welcome") => `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My page - ${title} </title>
</head>
<body>
    <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/catalog">Catalog</a>
    </nav>
    ${html}
</body>
</html>`;
