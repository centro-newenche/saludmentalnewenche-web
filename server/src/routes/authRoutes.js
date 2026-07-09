import { Router } from 'express';
import { login, logout, me } from '../controllers/authController.js';
import { verifyAdmin } from '../middlewares/authMiddleware.js';
import { loginLimiter } from '../middlewares/rateLimiters.js';

const router = Router();

router.post('/login', loginLimiter, login);
router.post('/logout', logout);
router.get('/me', verifyAdmin, me);

export default router;
