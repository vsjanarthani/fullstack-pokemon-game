const { User } = require('../models');

const userData = [
  {
    username: 'Mary Kom',
    email: 'mary.kom@gmail.com',
    password: 'test@test!'
  },
  {
    username: 'Charles Angels',
    email: 'charles.angels@yahoo.com',
    password: 'Test@test!'
  },
  {
    username: 'Nick Chopra',
    email: 'nick.chopra@outlook.com',
    password: 'test@Test!'
  },
  {
    username: 'Neil Armstrong',
    email: 'neil.armstrong@hotmail.com',
    password: 'testtest@!'
  },
  {
    username: 'Abdul Kalam',
    email: 'abdul.kalam@icloud.com',
    password: '!test@test'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
