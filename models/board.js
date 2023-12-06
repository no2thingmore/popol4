const Sequelize = require("sequelize");


class Board extends Sequelize.Model{
  static initiate(sequelize){
    Board.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "제목",
      },
      content: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "내용",
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "이미지 주소",
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        comment: "상태(0:종료,1:진행중)",
      },
      type: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        comment: "0:공지사항, 1:이벤트",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "최초등록 시간",
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "업데이트 시간",
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Board',
      tableName: 'board',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
}

module.exports = Board;