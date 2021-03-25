import config from '../config';
import jwt from 'jsonwebtoken';

const  auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token & Add user from payload
    req.user = jwt.verify(token, config.JWT_SECRET);
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

export default auth;
