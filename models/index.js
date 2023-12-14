const Sequelize = require("sequelize");
const User = require("./user");
const Store = require("./store");
const Food = require("./food");
const Orders = require("./orders");
const Board = require("./board");
const Ingredient = require("./ingredient");
const Event = require("./event");
const Admin = require("./admin");
const Inquiry = require("./inquiry")

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config.json')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Store = Store;
db.Food = Food;
db.Board = Board;
db.Event = Event;
db.Inquiry = Inquiry;
db.Ingredient = Ingredient;
db.Orders = Orders;
db.Admin = Admin;

User.initiate(sequelize);
Store.initiate(sequelize);
Food.initiate(sequelize);
Orders.initiate(sequelize);
Board.initiate(sequelize);
Event.initiate(sequelize);
Inquiry.initiate(sequelize)
Ingredient.initiate(sequelize);
Admin.initiate(sequelize);

User.associate(db);
Food.associate(db);
Store.associate(db);
Orders.associate(db);
Board.associate(db);
Event.associate(db);
Inquiry.associate(db)
Ingredient.associate(db);
Admin.associate(db);

module.exports = db;