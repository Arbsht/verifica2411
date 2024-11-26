const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
const fs = require('fs');

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    app.use('/', express.static(__dirname + "/"));
    res.sendFile(path.join(__dirname,'www/index.html'));
    });
app.get('/css/stile.css', function (req, res) {
    app.use('/', express.static(__dirname + "/"));
    res.sendFile(path.join(__dirname,'www/css/stile.css'));
    });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
