const Sequelize = require("sequelize");


class Food extends Sequelize.Model{
  static initiate(sequelize){
    Food.init({
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
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "이미지 경로",
      },
      coment: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "음식 설명",
      },
      kcal: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: "칼로리",
      },
      gram: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: "그램",
      },
      protein: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: "단백질",
      },
      fat: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: "지방",
      },
      salt: {
        type: Sequelize.FLOAT,
        allowNull: true,
        comment: "염도",
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "가격",
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "카테고리",
      },
      kinds: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        comment: "0:샌드위치 ,1:랩/기타 ,2:샐러드 ,3:사이드",
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Food',
      tableName: 'food',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
  static associate(db) {
    db.Food.hasMany(db.Orders, { foreignKey: 'food_id', sourceKey: 'id' });
  }
}

module.exports = Food;