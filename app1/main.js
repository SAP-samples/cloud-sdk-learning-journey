const express = require('express');

const app = express();
app.get('/', function (req, res) {

    var page = "<!DOCTYPE html><html><body>"
        + "<h1>Hello Node!</h1>"
        + "</body></html>";

    res.send(page);
});

const port = process.env.PORT || 3002;
app.listen(port);