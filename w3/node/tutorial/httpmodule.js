var http = require("http");

/* Web Server */
http
  .createServer(function (res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);

/* Add an HTTP Header */
http
  .createServer(function (res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.rend();
  })
  .listen(8080);

/* Read the Query String */
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);
