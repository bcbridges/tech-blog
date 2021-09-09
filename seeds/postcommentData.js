const { PostComment } = require("../models");

const postcommentdata = [
  {
    post_id: 2,
    user_id: 1,
    comment_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
  },
  {
    post_id: 2,
    user_id: 2,
    comment_body: "Nullam non nisi est sit amet. :)",
  },
];

const seedPostComment = () => PostComment.bulkCreate(postcommentdata);

module.exports = seedPostComment;
