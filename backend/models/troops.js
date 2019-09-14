const mongoose =require("mongoose");

const TroopsSchema = new mongoose.Schema({
    Kind: {
        type: String,
        unique: true,
        required: [true, "field required"],
    },
    Description:{
        type:String,
    },
    Strength: {
        type: String,
    },
    Agility:{
        type:String,
    },
    Intelligence:{
        type:String,
    },
    Terrain:{
        type:String,
    },
    Type:{
        type:String,
    }
},
{ timestamps: true });

let Troops
try {
    Troops = mongoose.model('Troops')
} catch (error) {
    Troops = mongoose.model('Troops', TroopsSchema)
}
module.exports = Troops;