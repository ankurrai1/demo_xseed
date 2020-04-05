const Troops = require("../models/troops")
var stringify = require('json-stringify-safe');

exports.create =  (req, res) => {
    data = req.body;
    const troops = new Troops(validData);
    try {
        const save= troops.save();
        return res.status(200).json({ token, save, message: "troops created" });
    } catch (errors) {
        return res.status(500).json({ errors: errors.mapped() });
    }
};

exports.all = async(req, res)=> {
    try {
        const troops = await Troops.find({});
        return res.status(200).json(troops);
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};


exports.byId = (req, res) => {
    validData = req.body;
    try {
        const troops = Troops.findById(validData.id);
        if (!troops) return res.status(404).json({ errors: "troops not found" });
        return res.status(200).json({ troops });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};

exports.update = (req, res)=> {
    validData = req.body;
    try {
        Troops.findByIdAndUpdate(validData.id, validData.data);
        const troops = troops.findById(validData.id);
        return res.status(200).json({ troops, message: "troops has been updated" });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};

exports.remove =  (req, res)=> {
    validData = req.body;
    try {
        const troops = Troops.findByIdAndRemove(validData.id);
        return res.status(200).json({ troops, message: "troops has been removed" });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};
