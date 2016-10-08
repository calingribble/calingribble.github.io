var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var PORT = 3000;

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/client/index.html');
});

console.log('listening on port ' + PORT);
app.listen(PORT);
