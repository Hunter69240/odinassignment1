const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  let filePath = '';

  
  if (req.url === '/') {
    filePath = 'index.html';
  } else if (req.url === '/about') {
    filePath = 'about.html';
  } else if (req.url === '/contact-me') {
    filePath = 'contact-me.html';
  } else {
    filePath = '404.html';
  }

 
  fs.readFile(path.join(__dirname, filePath), (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

// Start listening on port 8080
server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
