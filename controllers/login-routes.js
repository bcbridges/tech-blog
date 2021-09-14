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

router.get("/editpost/:id", async (req, res) => {
  try {
    let posts = await PostMain.findAll({
      where: {
        post_id: req.params.id,
      },
    });

    let post = posts.map((post) => post.get({ plain: true }));
    console.log(post);
    if (post[0].creator_id != req.session.currentUser) {
      return res.status(500).json("Access denied to edit post.");
    }
    res.status(200);
    res.render("editpost", post[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
