const router = require("express").Router();

const loginRoutes = require("./login-routes");
const dashboardRoutes = require("./dashboard-routes");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", loginRoutes);

module.exports = router;
