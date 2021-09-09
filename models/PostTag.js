const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection.js");

class PostTag extends Model {}

PostTag.init(
  {
    post_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post_main",
        key: "post_id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag_main",
        key: "tag_id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: "post_tag",
  }
);

module.exports = PostTag;
