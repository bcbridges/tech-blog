const { TagMain } = require("../models");

const tagmaindata = [
  {
    tag_keyword: "JavaScript",
  },
  {
    tag_keyword: "JS",
  },
  {
    tag_keyword: "CSS",
  },
  {
    tag_keyword: "HTML",
  },
  {
    tag_keyword: "Node.js",
  },
  {
    tag_keyword: "Express",
  },
  {
    tag_keyword: "Sequelize",
  },
];

const seedTagMain = () => TagMain.bulkCreate(tagmaindata);

module.exports = seedTagMain;
