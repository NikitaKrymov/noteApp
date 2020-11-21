"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var mongoDBClient = require('./utils/mongoDB')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
require('./routes/index')(app, mongoDBClient);
if (process.env.NODE_ENV === 'production') {
    var path_1 = require('path');
    app.use(express.static('client/build'));
    app.get('*', function (req, res) {
        res.sendFile(path_1.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
var PORT = process.env.PORT || 6000;
app.get('/', function (req, res) {
    res.send('App is on');
});
app.listen(PORT, function () {
    console.log("App is listening on port " + PORT);
});
//# sourceMappingURL=index.js.map