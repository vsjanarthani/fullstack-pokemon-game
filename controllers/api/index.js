const router = require('express').Router();

const userRoutes = require('./user-route');
const highscoreRoutes = require('./highscore-route');


router.use('/users', userRoutes);
router.use('/highscores', highscoreRoutes);

module.exports = router;