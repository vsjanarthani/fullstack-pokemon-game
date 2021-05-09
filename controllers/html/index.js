const router = require('express').Router();
const homeRoutes = require('./home-routes');
const draftpageRoutes = require('./draftpage-route');
const teamRoutes = require('./team-route');


router.use('/', homeRoutes);
router.use('/draftpage', draftpageRoutes);
router.use('/team', teamRoutes);



module.exports = router;