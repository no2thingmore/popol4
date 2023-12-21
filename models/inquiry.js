const Sequelize = require('sequelize')

class Inquiry extends Sequelize.Model {
  static initiate(sequelize) {
    Inquiry.init({
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
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        comment:"문의한 유저 아이디"
      },
      kinds:{
        type: Sequelize.CHAR(1),
        allowNull: false,
        comment: "0:FAQ, 1: 문의사항",
      },
      tags:{
        type: Sequelize.CHAR(1),
        allowNull: false,
        comment: "0:기타,1:사이트이용,2:포인트,3:제품,4:매장이용",
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
      modelName: 'Inquiry',
      tableName: 'inquiry',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Inquiry.belongsTo(db.Admin, { foreignKey: 'admin_id', targetKey: 'id' });
    db.Inquiry.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
  }
};

module.exports = Inquiry;