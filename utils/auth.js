// Function to prompt login if idle or logged out
const sessionAuth = (req, res, next) => {
    if (!req.session.user_id) {  // should change this to if (!req.session.user_id)
      res.redirect('/login');
    } else {
      next();
    }
  };

module.exports = sessionAuth;