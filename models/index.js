const Sequelize = require("sequelize");
const User = require("./user");
const Store = require("./store");
const Food = require("./food");
const Orders = require("./orders");
const Board = require("./board");
const Ingredient = require("./ingredient");

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Store = Store;
db.Food = Food;
db.Board = Board;
db.Ingredient = Ingredient;
db.Orders = Orders;

User.initiate(sequelize);
Store.initiate(sequelize);
Food.initiate(sequelize);
Orders.initiate(sequelize);
Board.initiate(sequelize);
Ingredient.initiate(sequelize);

User.associate(db);
Food.associate(db);
Store.associate(db);
Orders.associate(db);

module.exports = db;