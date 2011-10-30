var http = require("http");

http.createServer(function(req, res) {
  var redirect = "";
  var matches;

  if (matches = req.url.match(/^\/s3(.*)$/))
    redirect = "https://alindeman.s3.amazonaws.com" + matches[1];
  else
    redirect = "http://alindeman.github.com" + req.url

  res.writeHead(301, {"Location": redirect});
  res.end();
}).listen(process.env.PORT || 3000);
