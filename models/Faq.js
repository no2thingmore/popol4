const Sequelize = require('sequelize')

class Faq extends Sequelize.Model {
  static initiate(sequelize) {
    Faq.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
      },
      admin_id:{
        type:Sequelize.INTEGER,
        allowNull: true,
        comment:"수정/추가 한 관리자 이름"
      },
      kinds:{
        type: Sequelize.CHAR(1),
        allowNull: false,
        comment: "0:1:1문의, 1: 가맹점",
      },
      tags:{
        type: Sequelize.CHAR(1),
        allowNull: true,
        comment: "1:사이트이용,2:포인트,3:제품,4:매장이용, 5:가맹점",
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
        comment: "게시판 제목",
      },
      content:{
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "본문 내용",
      },
      comment:{
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "답변 내용",
      },
      add_file:{
        type: Sequelize.STRING,
        allowNull:true,
        comment:"이미지가 필요한 경우 경로 작성"
      },
      status:{
        type: Sequelize.CHAR(1),
        allowNull: false,
        comment: "0:대기, 1:완료",
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Faq',
      tableName: 'faq',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Faq.belongsTo(db.Admin, { foreignKey: 'admin_id', targetKey: 'id' });
  }
};

module.exports = Faq;