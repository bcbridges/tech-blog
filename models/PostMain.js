const { Model, DataTypes } = required("sequelize");

const sequelize = require("../config/connection.js");

class PostMain extends Model {}

PostMain.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    creator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "post_main",
  }
);

module.exports = PostMain;
