const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  res.json(await User.findAll());
  // res.render("login");
});

module.exports = router;
