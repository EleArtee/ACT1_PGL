const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{
    const TTGame = sequelize.define("TTGame", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        publisher: {
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.DOUBLE
        }
    });

    return TTGame;
}