import express from 'express';
const router = express.Router();
import { register, login, updateUser } from '../controllers/authController.js';
import autheticateUser from '../middleware/auth.js';
import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15min
  max: 10,
  message: 'Too many request, please try again after 15 minutes',
});

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(autheticateUser, updateUser);

export default router;
