import express from 'express';
const router = express.Router();
import { getAnalytics } from '../controllers/analytics.controller.js';

router.post('/analytics', getAnalytics);

export default router;