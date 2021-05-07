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
router.post('/', (req, res) => {

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users/login
router.post('/login', (req, res) => {

  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      console.log(req.session);

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});


// User log out
router.post("./logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
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