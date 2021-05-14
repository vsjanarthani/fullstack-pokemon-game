const { User } = require('../models');

// creating user seed
const userData = [
  {
    id:'0a9213f9-003e-4fba-9837-e23756924e99',
    username: 'Mary Kom',
    email: 'mary.kom@gmail.com',
    password: 'test@test!'
  },
  {
    id:'1895ee2d-bcf8-4c8c-8146-e56c876f9197',
    username: 'Charles Angels',
    email: 'charles.angels@yahoo.com',
    password: 'Test@test!'
  },
  {
    id:'557f5ae0-7760-4305-b2b1-40f72a082f0e',
    username: 'Nick Chopra',
    email: 'nick.chopra@outlook.com',
    password: 'test@Test!'
  },
  {
    id:'be88bf2d-e41e-4fa0-937d-7e252cc73404',
    username: 'Neil Armstrong',
    email: 'neil.armstrong@hotmail.com',
    password: 'testtest@!'
  },
  {
    id:'e8c9edd0-c059-4f23-b525-a51f8bd7e648',
    username: 'Abdul Kalam',
    email: 'abdul.kalam@icloud.com',
    password: '!test@test'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
