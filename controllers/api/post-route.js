const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  User,
  TagMain,
  PostMain,
  PostTag,
  PostComment,
} = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.body.post_tag);

    // CREATE POST FROM REQ INFO
    let newPost = await PostMain.create({
      creator_id: req.session.currentUser,
      post_title: req.body.post_title,
      post_body: req.body.post_body,
    });

    // INSERT NEW POST TAG INTO PST TAG TABLE
    await PostTag.create({
      post_id: newPost.post_id,
      tag_id: parseInt(req.body.post_tag),
    });

    res.status(200).json("Post was created.");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
