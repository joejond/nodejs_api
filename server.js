var express = require('express');
var app     = express();

var port    = process.env.port || 8081;
var bodyParser = require('body-parser');
var controller = require('./controller');

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);

console.log("Sinau server NodeJS ........ on port == "+port);


