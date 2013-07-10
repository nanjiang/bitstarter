var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var infile = "index.html";

var content = fs.readFileSync(infile);
console.log(content.toString());

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
