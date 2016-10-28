var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = Number(process.env.PORT || 3003);

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/client'));

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});
