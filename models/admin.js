const Sequelize = require("sequelize");

class Admin extends Sequelize.Model {
  static initiate(sequelize) {
    Admin.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //기본키
        autoIncrement: true, //자동생성
        allowNull: false,
        comment: "식별자 ID (기본키)",
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
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Admin',
      tableName: 'admin',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  //참조키로 Order모델에 id(sourceKey)를 userId(foreignKey)라는 이름으로 보냄
  static associate(db) {
    db.Admin.hasMany(db.Board, { foreignKey: 'admin_id', sourceKey: 'id' });
    db.Admin.hasMany(db.Event, { foreignKey: 'admin_id', sourceKey: 'id' });
    db.Admin.hasMany(db.Inquiry, { foreignKey: 'admin_id', sourceKey: 'id' });
    db.Admin.hasMany(db.Ingredient, { foreignKey: 'admin_id', sourceKey: 'id' });
    db.Admin.hasMany(db.Food, { foreignKey: 'admin_id', sourceKey: 'id' });
  }
  
};


module.exports = Admin;