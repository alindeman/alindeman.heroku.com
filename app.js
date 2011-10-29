var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(301, {"Location": "http://alindeman.github.com" + req.url});
  res.end();
}).listen(process.env.PORT || 3000);
