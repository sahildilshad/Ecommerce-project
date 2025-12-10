const jwt = require("jsonwebtoken");

const auth = (req, res,next) => {
  const bearerHeader = req.header.authorization;

  if (!bearerHeader || !bearerHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Access Denied :- NO token provided" });
  }
  const token = bearerHeader.split(" ")[1];
  try {
    const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifyUser;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token is invalid or expired" });
  }
};

module.exports = auth;
