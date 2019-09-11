const express = require('express');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const app = express();

const respondWith404 = function(req, res) {
    res.status(404).send(`404 File not found!\t bad url ${req.url}`);
};

app.use(cookieParser());
app.use(express.urlencoded({
    extended: false
}));

app.get("/",(req,res)=>{
    res.status(200)
    .send(`your server is running good`);
})

app.use(express.static('public'));
app.use(respondWith404);

module.exports=app;