const jwt = require("jsonwebtoken");
const { promisify } = require("util");

// este módulo intercepta as requisições e vê se usuario

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, "secret");

    req.userId = decoded.id;

    console.log(decoded.id);

    return next();
  } catch (err) {
    return res.status(401).send({ error: "Token invalid" });
  }
};