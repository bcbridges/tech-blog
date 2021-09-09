const router = require("express").Router();

const loginRoutes = require("./login-routes");
const seedRoutes = require("./seed-routes");

router.use("/", loginRoutes);
router.use("/seed", seedRoutes);

module.exports = router;
