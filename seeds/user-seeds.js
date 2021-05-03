const { User } = require('../models');

const userData = [
  {
    id: '1',
    username: 'Mary Kom',
    email: 'mary.kom@gmail.com',
    password: 'test@test!'
  },
  {
    id: '2',
    username: 'Charles Angels',
    email: 'charles.angels@yahoo.com',
    password: 'Test@test!'
  },
  {
    id: '3',
    username: 'Nick Chopra',
    email: 'nick.chopra@outlook.com',
    password: 'test@Test!'
  },
  {
    id: '4',
    username: 'Neil Armstrong',
    email: 'neil.armstrong@hotmail.com',
    password: 'testtest@!'
  },
  {
    id: '5',
    username: 'Abdul Kalam',
    email: 'abdul.kalam@icloud.com',
    password: '!test@test'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
