const { User } = require("../models");

const userdata = [
  {
    username: "bcbridges",
    email: "bbridgesdev@gmail.com",
    password: "theCowWasJumping5814$",
    first_name: "Brice",
    last_name: "Bridges",
  },
  {
    username: "mOdie",
    email: "mhasz@gmail.com",
    password: "TeamAwesome56189!!",
    first_name: "Megan",
    last_name: "Hasz",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
