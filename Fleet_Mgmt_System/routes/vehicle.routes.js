import { Router } from 'express';
import { addVehicle, assignDriver, getVehicle } from '../controllers/vehicle.controller.js';
import rateLimiter from '../middlewares/rateLimiter.js';

const router = Router();

router.post('/add', rateLimiter, addVehicle);
router.patch('/assign-driver/:vehicleId', assignDriver);
router.get('/:vehicleId', getVehicle);

export default router;