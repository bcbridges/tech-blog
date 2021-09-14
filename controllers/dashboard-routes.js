const router = require("express").Router();
const { User, PostMain } = require("../models");

// FINDS ALL POSTS AND SORTS THEM NEWEST ON TOP
router.get("/", async (req, res) => {
  let allPosts = await PostMain.findAll({
    include: [{ model: User }],
    order: [["createdAt", "DESC"]],
  });

  let posts = allPosts.map((post) => post.get({ plain: true }));

  res.render("dashboard", { posts });
});

module.exports = router;
