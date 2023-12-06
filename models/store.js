const Sequelize = require("sequelize");

class Store extends Sequelize.Model{
  static initiate(sequelize){
    Store.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "업체명",
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "주소(지번)",
      },
      address_info: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "주소(경.위도)",
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "매장 전화번호",
      },
      representative: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "대표이름",
      },
      status: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        comment: "운영상태(0:운영종료, 1:운영중, 2:임시종료)",
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Store',
      tableName: 'store',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }

  static associate(db) {
    db.Store.hasMany(db.Orders, { foreignKey: 'store_id', sourceKey: 'id' });
  }
}

module.exports = Store;