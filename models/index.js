const User = require("./User");
const TagMain = require("./TagMain");
const PostMain = require("./PostMain");
const PostComment = require("./PostComment");
const PostTag = require("./PostTag");

// User has many Posts
User.hasMany(PostMain, { foreignKey: "creator_id" });
PostMain.belongsTo(User, { foreignKey: "creator_id" });

// User has many Comments
User.hasMany(PostComment, { foreignKey: "user_id" });
PostComment.belongsTo(User, { foreignKey: "user_id" });

// Post has many Comments
PostMain.hasMany(PostComment, { foreignKey: "post_id" });
PostComment.belongsTo(PostMain, { foreignKey: "post_id" });

// Post has many Tags
PostMain.hasMany(PostTag, { foreignKey: "post_id" });
PostTag.belongsTo(PostMain, { foreignKey: "post_id" });

// Tag Main has many Post Tags
TagMain.hasMany(PostTag, { foreignKey: "tag_id" });
PostTag.belongsTo(TagMain, { foreignKey: "tag_id" });

module.exports = {
  User,
  TagMain,
  PostMain,
  PostComment,
  PostTag,
};
