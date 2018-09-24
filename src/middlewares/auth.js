const token = require('../config/secret');

const authMiddleware = (req, res, next) => {
  const headerToken = req.header('token');
  if (headerToken !== token) {
    res.status(200)
      .json({
        status: 'error',
        message: 'Wrong token',
      });
  }
  next();
};

module.exports = authMiddleware;
