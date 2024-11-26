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
app.get('/api/mante', (req, res) => {
    fs.readFile('./www/mante.json', 'utf8', (err, data) => {
    if (err) {
    console.error('Errore durante la lettura del file JSON:', err);
    return res.status(500).send('Errore interno del server');
    }
        
    const productsData = JSON.parse(data);
    console.log(typeof productsData);
    res.setHeader('Content-Type', 'application/json');
    res.json(productsData);
    });
    });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
