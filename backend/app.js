const logger = require("morgan"); // to log user requested url on server
const dotenv = require("dotenv"); // to config envirnment


const express = require("express");
const bodyParser = require("body-parser");
const route = require('./routes')
const cors = require("cors");

const session = require('express-session');
const app = express();
dotenv.config({path: ".env"});

let port = process.env.PORT ;

app.set("port", port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(logger('dev'));
app.get('/all',route.getAlltroops)
app.post('/saveClone',route.getAlltroops);

app.use(express.static('public'));



module.exports = app;
