const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const app = express();
const log = require("./src/logger.js").log;


app.use(log());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}));

app.get("/",(req,res)=>{
    res.status(200)
    .send(`your server is running good`);
})

app.use(express.static('public'));
app.use(handlers.respondWith404);

module.exports=app;