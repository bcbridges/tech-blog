const { PostMain } = require("../models");

const postmaindata = [
  {
    creator_id: "1",
    post_title: "Netus et malesuada fames ac turpis egestas?",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis imperdiet massa tincidunt nunc. Sed viverra ipsum nunc aliquet bibendum enim. Purus viverra accumsan in nisl nisi scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Ullamcorper sit amet risus nullam. Euismod quis viverra nibh cras pulvinar. Convallis convallis tellus id interdum velit. Elementum integer enim neque volutpat ac tincidunt vitae. Urna et pharetra pharetra massa massa. Ipsum a arcu cursus vitae congue mauris rhoncus. Quam quisque id diam vel quam elementum pulvinar. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Libero nunc consequat interdum varius sit amet mattis. -BB",
  },
  {
    creator_id: "2",
    post_title: "Massa tincidunt dui!",
    post_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc!",
  },
];

const seedPostMain = () => PostMain.bulkCreate(postmaindata);

module.exports = seedPostMain;
