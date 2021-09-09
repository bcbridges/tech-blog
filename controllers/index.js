const router = require("express").Router();

const loginRoutes = require("./login-routes");

router.use("/", loginRoutes);

module.exports = router;
