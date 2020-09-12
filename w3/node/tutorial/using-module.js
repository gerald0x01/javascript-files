var http = require("http");
var dt = require("./02-mymodule");

http
  .createServer(function (res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently:" + dt.myDateTime());
    res.end();
  })
  .listen(8080);
