const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "사용자(user) 식별자 ID (기본키)",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: "이메일",
        validate: {
          isEmail: {
            msg: "이메일 형식에 맞지 않습니다.",
          }
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^.{6,}$/,
            msg: "비밀번호는 최소 6자 이상이어야 합니다."
          }
        },
        comment: "비밀번호",
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          len: {
            args: [2, 100],
            msg: "이름은 최소 2자 이상이어야 합니다."
          }
        },
        comment: "이름",
      },
      contact_number: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^(\+\d{1,3}[- ]?)?\d{11}$/,
            msg: "유효한 연락처 형식이 아닙니다."
          }
        },
        comment: "연락처",
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isIn: {
            args: [[0, 1]],
            msg: "유효한 역할이 아닙니다."
          }
        },
        defaultValue: '0',
        comment: "0(일반), 1(사업자)", // 사용자 역할
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'User',
      tableName: 'user',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  //참조키로 Order모델에 id(sourceKey)를 userId(foreignKey)라는 이름으로 보냄
  static associate(db) {
    db.User.hasMany(db.Orders, { foreignKey: 'user_id', sourceKey: 'id' });
    db.User.hasMany(db.Inquiry, { foreignKey: 'user_id', sourceKey: 'id' });
  }
  
};


module.exports = User;