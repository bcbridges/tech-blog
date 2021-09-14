const router = require("express").Router();
const postRoutes = require("./post-route");
const userRoutes = require("./user-route");

router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
