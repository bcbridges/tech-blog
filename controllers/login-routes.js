const router = require("express").Router();
const { User, TagMain, PostMain } = require("../models");

router.get("/", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/NewPost", async (req, res) => {
  let currentTags = await TagMain.findAll();
  let tags = currentTags.map((tag) => tag.get({ plain: true }));

  res.status(200);
  res.render("newpost", { tags });
});

router.get("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/myposts", async (req, res) => {
  let userPosts = await PostMain.findAll({
    where: {
      creator_id: req.session.currentUser,
    },
  });

  let posts = userPosts.map((post) => post.get({ plain: true }));
  res.render("myposts", { posts });
});

module.exports = router;
