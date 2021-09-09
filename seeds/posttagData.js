const { PostTag } = require("../models");

const posttagdata = [
  {
    post_id: 1,
    tag_id: 1,
  },
  {
    post_id: 1,
    tag_id: 2,
  },
  {
    post_id: 1,
    tag_id: 7,
  },
  {
    post_id: 2,
    tag_id: 2,
  },
  {
    post_id: 2,
    tag_id: 3,
  },
];

const seedPostTag = () => PostTag.bulkCreate(posttagdata);

module.exports = seedPostTag;
