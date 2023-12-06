const Sequelize = require("sequelize");


class Ingredient extends Sequelize.Model{
  static initiate(sequelize){
    Ingredient.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
      },
      kname: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "한글이름",
      },
      ename: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "영어이름",
      },
      kcal: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: "칼로리",
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "재료 설명",
      },
      kinds: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        comment: "0:빵,1:야채,2:치즈,3:소스,4:육류",
      },
      add_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "추가가격",
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Ingredient',
      tableName: 'ingredient',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
}

module.exports = Ingredient;