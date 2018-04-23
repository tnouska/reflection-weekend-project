const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const reflectionsRouter = require('./routes/reflections.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/reflection', reflectionsRouter)

/** ---------- START SERVER ---------- **/
app.listen(port,'0.0.0.0', function () {
    console.log('Listening on port: ', port);
});