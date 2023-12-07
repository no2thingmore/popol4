const Sequelize = require('sequelize')

class Contents extends Sequelize.Model {
  static initiate(sequelize) {
    Contents.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
      },
      admin_id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        comment:"수정/추가 한 관리자 이름"
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
        comment: "게시판 제목",        
      },
      content:{
        type: Sequelize.TEXT,
        allowNull: false,
        comment: "본문 내용",
      },
      image_url:{
        type: Sequelize.STRING,
        allowNull:true,
        comment:"이미지가 필요한 경우 경로 작성"
      },
      type:{
        type: Sequelize.CHAR(1),
        allowNull: false,
        comment: "식별자 ID (기본키)",
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Contents',
      tableName: 'contents',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Contents.belongsTo(db.Admin, { foreignKey: 'admin_id', targetKey: 'id' });
  }
};

module.exports = Contents;