const jwt = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        next({ error: { code: 403 } });
      }

      req.user = user;
      next();
    });
  } else {
    next({ error: { code: 403 } });
  }
};
