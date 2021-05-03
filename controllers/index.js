const router = require('express').Router();

// const htmlRoutes = require('./Html');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/', htmlRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;