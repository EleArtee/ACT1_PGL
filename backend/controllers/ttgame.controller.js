const db = require("../models");
const TTGame = db.juegos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const ttgame = {
        name: req.body.name,
        publisher: req.body.publisher,
        price: req.body.price
    };

    if (!req.body.name){
        res.status(400).send({
            message: "El juego debe tener un nombre"
        });
        return;
    }

    TTGame.create(ttgame)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algo pasó mientras se creaba el juego de mesa."
            })
        });
};
 
exports.findAll = (req, res) => {
    TTGame.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Algún error ocurrió mientras se obtenían los juegos de mesa."
            })
        })
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    TTGame.findByPK(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el juego con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el juego con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    TTGame.update(req.body, {
        where: { id: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El juego fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el juego con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el juego con el id =" + id
            })
        })
};

exports.delete = (req, res) => {
    const id = req.params.id;

    TTGame.destroy( {
        where: { id: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El juego fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el juego con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el juego con el id =" + id
            })
        })
};