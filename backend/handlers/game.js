const Game = require("../models/game")

exports.create = (req, res) => {
    data = req.body;
    const game = new Game(validData);
    try {
        const save= game.save();
        return res.status(200).json({ token, save, message: "game created" });
    } catch (errors) {
        return res.status(500).json({ errors: errors.mapped() });
    }
};

exports.all = (req, res)=> {
    try {
        const games = Game.find({});
        return res.status(200).json({ games });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};


exports.byId = (req, res) => {
    validData = req.body;
    try {
        const game = Game.findById(validData.id);
        if (!game) return res.status(404).json({ errors: "game not found" });
        return res.status(200).json({ game });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};

exports.update = (req, res)=> {
    validData = req.body;
    try {
        Game.findByIdAndUpdate(validData.id, validData.data);
        const game = game.findById(validData.id);
        return res.status(200).json({ game, message: "game has been updated" });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};

exports.remove =  (req, res)=> {
    validData = req.body;
    try {
        const game = Game.findByIdAndRemove(validData.id);
        return res.status(200).json({ game, message: "game has been removed" });
    } catch (errors) {
        return res.status(500).json({ errors });
    }
};