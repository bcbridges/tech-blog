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
  posts.map((post) => {
    let cleanPostDate = new Date(post.createdAt).toLocaleString();
    post.createdAt = cleanPostDate;
  });

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
  post.map((post) => {
    let cleanPostDate = new Date(post.createdAt).toLocaleString();
    post.createdAt = cleanPostDate;

    post.post_comments.map((comment) => {
      let cleanCommentDate = new Date(comment.createdAt).toLocaleString();
      comment.createdAt = cleanCommentDate;
    });
  });

  return res.render("comments", { post });
});

module.exports = router;
