const router = require("express").Router();

const loginRoutes = require("./login-routes");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/", loginRoutes);

module.exports = router;
