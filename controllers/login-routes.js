const router = require("express").Router();
const { User, TagMain } = require("../models");

router.get("/", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
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

module.exports = router;
