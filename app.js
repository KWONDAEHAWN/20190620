var http = require('http');
var fs = require("fs");
var server = http.createServer(function(req, res) {
  var url = "";
  if(req.url == "/") {
      url = "/main.html";
  } else if(req.url == "/favicon.ico") {
      return res.writeHead(200, {'Content-Type': 'image/x-icon'});
  } else if(require("path").extname(req.url) == ".css"){
      url = req.url;
      res.setHeader('Content-Type', 'text/css');
  } else {
      url = req.url;
      res.setHeader('Content-Type', 'text/html');
  }
  res.statusCode = 200;
  res.end(fs.readFileSync(__dirname + url));
});
server.listen(80, function() {
  console.log('Server running~');
});
