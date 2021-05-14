const router = require('express').Router();


// get request to display login page
router.get('/', (req, res) => {
    // console.log(req.session)
    if (req.session.loggedIn) {
        res.redirect('/team');
        return;
    }
    res.render('login');
});

// get request to display sign up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/team');
        return;
    }
    res.render('signup');
});

module.exports = router;