const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll(
      // {
      //   attributes: { exclude: ['password'] }
      // }
    );
    res.status(200).json(allUsers);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// GET /api/users/id
router.get('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const userById = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id }
    });
    if (!userById) {
      return res.status(404).json({ message: 'No user found with this id' });
    }
    res.status(200).json(userById);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body
    console.log(username, email, password);
    const newUser = await User.create({
      username,
      email,
      password
    });
    res.status(200).json(newUser);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// POST /api/users/login
router.post('/login', async (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  try {
    const { email, password } = req.body
    const userLogin = await User.findOne({
      where: { email }
    });
    // console.log('User Login', userLogin);
    if (!userLogin.email) {
      return res.status(400).json({ message: 'No user with that email address!' });
    }
    const validPassword = await userLogin.checkPassword(password);
    // console.log(validPassword);
    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect password!' });  
    }
    res.json({ user: userLogin.username, message: 'You are now logged in!' });
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// PUT /api/users/id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.update(req.body, {
      individualHooks: true,
      where: { id }
    });
    const userById = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id }
    });
    if (!userById) {
      return res.status(404).json({ message: 'No user found with this id' });
    }
    res.status(200).json({ Updated: userById });
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// DELETE /api/users/id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id }
    });
    if (!userById) {
      return res.status(404).json({ message: 'No user found with this id' });
    }
    await User.destroy({ where: { id } });
    res.status(200).json({ Deleted: userById });

  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;