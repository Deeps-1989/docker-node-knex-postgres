
var express = require('express');
var app = express();

var port  = 3000 || process.env.port;
app.listen(port, function() {
  console.log(`app started listening on ${port}`);
});




