import { Router } from 'express';
import { createTrip, getTrip, updateTrip, deleteTrip, endTrip } from '../controllers/trip.controller.js';

const router = Router();

router.post('/create', createTrip);
router.get('/:tripId', getTrip);
router.patch('/update/:tripId', updateTrip);
router.delete('/delete/:tripId', deleteTrip);
router.patch('/end/:tripId', endTrip);

export default router;
