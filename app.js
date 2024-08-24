const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page')
  }
  if (req.url === '/about') {
    res.end('About page');
  }

  res.end(`<h1>Oops</h1>
  <p>This page is not found</p>
  <a href="/">Back home</a>
  `)
}); 

server.listen(5000);