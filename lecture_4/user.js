const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
  console.log(req.url,req.method,req.headers);
  if (req.url === '/home') {
    res.write('Welcome to the Home Page');
    return res.end();
  } else if (req.url === '/men') {
    res.write('Welcome to men page');
    return res.end();
  } else if (req.url === '/women') {
    res.write('Welcome to women page');
    return res.end();
  } else if (req.url === '/kids') {
    res.write('Welcome to kids page');
    return res.end();
  } else if (req.url === '/cart' ) {
    res.write('Welcome to cart page');
    return res.end();
  } else {
  res.setHeader('Content-Type', 'text/html');  // tell browser it's HTML
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <h1>Welcome to Myntra</h1>
      <h2>Shop for Fashion and Lifestyle</h2> 
      <p>Discover the latest trends for men, women, kids, and cart.</p>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </body>
    </html>
  `);
  return res.end();
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Listening for requests on port http://localhost:3000');
}); 