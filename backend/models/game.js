const mongoose =require("mongoose");
const GameShema = new mongoose.Schema({
    gamestatus:{
        type:JSON
    },
    gameResult:{
        type: JSON
    }
},
{ timestamps: true });

let Game = mongoose.model('Game', GameShema)
module.exports = Game;
