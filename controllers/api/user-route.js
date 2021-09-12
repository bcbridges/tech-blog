const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  User,
  TagMain,
  PostMain,
  PostTag,
  PostComment,
} = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = User.findAll({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      return res.status(400);
    }

    const validPass = await userData.checkPassword(req.body.password);

    if (!validPass) {
      return res.status(400);
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
