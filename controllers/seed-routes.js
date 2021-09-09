const router = require("express").Router();
const seedAll = require("../seeds/index.js");

router.post("/", async (req, res) => {
  if (req.body.password !== process.env.JAWSDB_PASSWORD) {
    return res.json("INVALID");
  } else {
    await seedAll();
    return res.json("VALID");
  }
});

module.exports = router;
