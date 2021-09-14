const router = require("express").Router();
const { User, PostMain, PostTag, PostComment } = require("../models");
const withAuth = require("../utils/helpers");

// FINDS ALL POSTS AND SORTS THEM NEWEST ON TOP
router.get("/", withAuth, async (req, res) => {
  let allPosts = await PostMain.findAll({
    include: [{ model: User }],
    order: [["createdAt", "DESC"]],
  });

  let posts = allPosts.map((post) => post.get({ plain: true }));

  res.render("dashboard", { posts });
});

router.get("/comments/:id", withAuth, async (req, res) => {
  let onePost = await PostMain.findAll({
    where: {
      post_id: req.params.id,
    },
    include: [
      {
        model: PostComment,
        include: { model: User, attributes: ["username"] },
      },
      { model: User, attributes: ["username", "createdAt"] },
    ],
  });

  let post = onePost.map((post) => post.get({ plain: true }));
  console.log(post);
  return res.render("comments", { post });
});

module.exports = router;
