const withAuth = (req, res, next) => {
  //if the required session is over, redirect to login
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
