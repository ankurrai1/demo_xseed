const logger = require("morgan"); // to log user requested url on server
const dotenv = require("dotenv"); // to config envirnment

const bluebird = require("bluebird"); // used for creating promise
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const route = require('./routes')
const cors = require("cors");

const session = require('express-session');
const MongoStore = require("connect-mongo")(session)
const app = express();
dotenv.config({path: ".env"});

let port = process.env.PORT ;
let mongoUrl = process.env.MONGO_URI;

app.set("port", port);

(mongoose).Promise = bluebird;
mongoose.connect(mongoUrl,{ useNewUrlParser: true })
        .then(() => console.log("Connected to Mongo DB"))
.catch(err =>console.log("MongoDB connection error. Please make sure MongoDB is running. " + err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));

app.use(logger('dev'));
app.get('/all',route.getAlltroops)
app.post('/saveClone',route.getAlltroops);

app.use(express.static('public'));



module.exports = app;