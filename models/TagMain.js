const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class TagMain extends Model {}

TagMain.init({
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_keyword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
