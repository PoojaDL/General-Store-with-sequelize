const Sequilize = require("sequelize");

const sequelize = require("../util/database");

const Store = sequelize.define("items", {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  item: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequilize.BIGINT,
    allowNull: false,
  },
  quantity: {
    type: Sequilize.BIGINT,
    allowNull: false,
  },
});

module.exports = Store;
