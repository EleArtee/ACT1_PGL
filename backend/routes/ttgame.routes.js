module.exports = app => {
    const TTGame = require ("../controllers/ttgame.controller.js");

    var router = require("express").Router();

    router.post("/", TTGame.create);

    router.get("/", TTGame.findAll);

    router.get("/:id", TTGame.findOne);

    router.put("/:id", TTGame.update);

    router.delete("/:id", TTGame.delete);

    app.use('/api/ttgame', router);
}