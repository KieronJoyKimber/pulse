const http = require('http');
const port = process.env.PORT || 8443;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Pulse is up and running!\n');
});

server.listen(port, () => {
  console.log(`Pulse listening on port ${port}`);
});
