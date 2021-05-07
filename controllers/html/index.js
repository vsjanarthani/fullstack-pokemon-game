const router = require('express').Router();
const homeRoutes = require('./home-routes');
const draftpageRoutes = require('./draftpage-route');

router.use('/', homeRoutes);
router.use('/draftpage', draftpageRoutes);


module.exports = router;