const router = require('express').Router();
const apiRoutes = require("./api");
const htmlRoutes = require('./html');


// middleware callback functions
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req,res) => {
	res.status(404).send('<h1>Path/Page not Found!</h1>');
});

module.exports = router;