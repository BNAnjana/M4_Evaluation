import { Router } from 'express';
import { createTrip, endTrip } from '../controllers/trip.controller.js';

const router = Router();

router.post('/create', createTrip);
router.patch('/end/:tripId', endTrip);

export default router;