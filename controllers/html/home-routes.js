const router = require('express').Router();

router.get('/', (req, res) => {
    // console.log(req.session)
    if (req.session.loggedIn) {
        res.redirect('/team');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/team');
        return;
    }
    res.render('signup');
});

module.exports = router;