const troops = require('./handlers/troopes')
const game = require('./handlers/game')


const getAlltroops = function(req,res){
    troops.all(req,res);
}

const saveClone = function(req,res){
    game.all(req,res);
}

const add = function(req,res){
}

const addVehicles=function(req,res){
    let searchManager = req.app.searchManager;
    vehicles = JSON.parse(req.body.vehicles);
    searchManager.addVehicles(vehicles);
    res.end();
}

let respondWithTimeToken=function(req,res){
    let planet=req.body.planet;
    let vehicle=req.body.vehicle;
    let searchManager = req.app.searchManager;
    let timeToken = searchManager.getTimeToken(planet,vehicle);
    res.send(JSON.stringify(timeToken));
}

const respondWithPlanets = function(req,res){
    let searchManager = req.app.searchManager;
    let planets = searchManager.getAvailable("planets");
    res.send(JSON.stringify(planets));
}

const respondWithVehicles = function(req,res){
    let searchManager = req.app.searchManager;
    let vehicles = searchManager.getAvailable("vehicles");
    res.send(JSON.stringify(vehicles));
}

const addToFind = function(req,res){
    let planet=req.body.planet;
    let vehicle=req.body.vehicle;
    let searchManager = req.app.searchManager;
    searchManager.addToFind(planet,vehicle);
    res.end();
}

const respondWithQuaryData = function(req,res){
    let searchManager = req.app.searchManager;
    let quaryData = searchManager.getQuaryData("vehicles");
    res.send(JSON.stringify(quaryData));
}

const respondWith404 = function(req, res) {
    res.status(404).send(`404 File not found!\t bad url ${req.url}`);
};


module.exports={
    respondWith404,
    getAlltroops,
    respondWithTimeToken,
    respondWithQuaryData,
    addVehicles,
    respondWithPlanets,
    respondWithVehicles,
    addToFind
}