// Function to prompt login if idle or logged out
const sessionAuth = (req, res, next) => {
    if (!req.session.user_id) {  // checks if the user is logged in or not
      res.redirect('/');
    } else {
      next();
    }
  };

module.exports = sessionAuth;