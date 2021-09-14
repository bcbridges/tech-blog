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
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      return res.status(400).json("THERE IS NO USER");
    }

    const validPass = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    console.log(validPass);
    if (!validPass) {
      return res.status(400).json("INCORRECT PASSWORD");
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.currentUser = userData.user_id;
      return res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/new", async (req, res) => {
  try {
    // FIND ANY USER THAT HAS A MATCHING USERNAME
    let currentUsernames = await User.findAll({
      where: {
        username: req.body.username,
      },
    });
    if (currentUsernames.length > 0) {
      console.log("THIS IS THE USERNAME IF");
      return res.status(418).json("Matching Username");
    }

    // FIND ANY USER THAT HAS A MATCHING EMAIL
    let currentUserEmails = await User.findAll({
      where: {
        email: req.body.email,
      },
    });

    if (currentUserEmails.length > 0) {
      console.log("THIS IS THE EMAIL IF");
      return res.status(418).json("Matching Email");
    }
    // IF NOTHING EXISTING MATCHES, THEN RETURN A GOOD STATUS
    if (currentUserEmails.length == 0 && currentUsernames.length == 0) {
      let newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      });

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.currentUser = newUser.user_id;
        return res.status(200).json(newUser);
      });
    }
  } catch (err) {
    console.log("This is the catch clause in /new");
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
