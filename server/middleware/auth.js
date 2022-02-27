import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const envs = dotenv.config();

const generateToken(req, res, next) {
  const id = req.body.id;
  const token = jwt.sign({ "id": id }, process.env.TOKEN_SECRET);
  return token;
};

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded.id;
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
  return next();
};

export { verifyToken };
