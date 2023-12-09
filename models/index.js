const Sequelize = require("sequelize");
const User = require("./user");
const Store = require("./store");
const Food = require("./food");
const Orders = require("./orders");
const Board = require("./board");
const Ingredient = require("./ingredient");
const Contents = require("./contents");
const Admin = require("./admin");

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
db.Contents = Contents;
db.Admin = Admin;

User.initiate(sequelize);
Store.initiate(sequelize);
Food.initiate(sequelize);
Orders.initiate(sequelize);
Board.initiate(sequelize);
Ingredient.initiate(sequelize);
Contents.initiate(sequelize);
Admin.initiate(sequelize);

User.associate(db);
Food.associate(db);
Store.associate(db);
Orders.associate(db);
Board.associate(db);
Ingredient.associate(db);
Contents.associate(db);
Admin.associate(db);

module.exports = db;