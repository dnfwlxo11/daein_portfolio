var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router/index');

var port = process.env.PORT || 8000;

app.listen(port, function (req, res) {
    console.log('Open Server!!');
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('imgs'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);