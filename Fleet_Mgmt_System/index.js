import express, { json } from 'express';
import dotenv from "dotenv";
import logger from './middlewares/logger.js';
import notFound from './middlewares/notFound.js';
import userRoutes from './routes/user.routes.js';
import vehicleRoutes from './routes/vehicle.routes.js';
import tripRoutes from './routes/trip.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';

const app = express();
dotenv.config();
app.use(json());
app.use(logger);

// Routes
app.use('/users', userRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/trips', tripRoutes);
app.use('/analytics', analyticsRoutes);

// 404 handler
app.use(notFound);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});