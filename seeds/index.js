const sequelize = require("../config/connection.js");
const seedUser = require("./userData");
const seedTagMain = require("./tagmainData");
const seedPostMain = require("./postmainData");
const seedPostComment = require("./postcommentData");
const seedPostTag = require("./posttagData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // Loops through to seed all data from concurrent js files
  await seedUser();
  await seedTagMain();
  await seedPostMain();
  await seedPostTag();
  await seedPostComment();

  process.exit(0);
};

seedAll();

module.exports = seedAll;
