const Sequelize = require("sequelize");


class Orders extends Sequelize.Model{
  static initiate(sequelize){
    Orders.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "고객번호",
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "매장번호",
      },
      food_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: "기본음식",
      },
      status: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        comment: "0:조리중, 1:배달중, 2:완료, 3:취소",
      },
      cancel:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:0,
        comment:"0:주문, 1:취소"
      },
      order_list: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "주문목록",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
        comment: "주문요청 시간",
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Orders',
      tableName: 'oreders',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }

  static associate(db) {
    db.Orders.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
    // db.User.hasMany(db.Orders, { foreignKey: 'user_id', sourceKey: 'id' });
    db.Orders.belongsTo(db.Store, { foreignKey: 'store_id', targetKey: 'id' });
    // db.Store.hasMany(db.Orders, { foreignKey: 'store_id', sourceKey: 'id' });
    db.Orders.belongsTo(db.Food, { foreignKey: 'food_id', targetKey: 'id' });
    // db.Food.hasMany(db.Orders, { foreignKey: 'food_id', sourceKey: 'id' });
  }

}

module.exports = Orders;