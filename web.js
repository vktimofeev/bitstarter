var express = require('express');
var app = express();
app.use(express.logger());

var buf = new Buffer(102400);

var file = require("fs");

buf = file.readFileSync("index.html");


app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
