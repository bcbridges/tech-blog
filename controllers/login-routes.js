const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

module.exports = router;
