import express, { json } from 'express';
import dotenv from "dotenv";
const app = express();
dotenv.config();

import logger from './middlewares/logger.js';
import notFound from './middlewares/notFound.js';

app.use(json());
app.use(logger);

// Routes
app.use('/users', require('./routes/user.routes'));
app.use('/vehicles', require('./routes/vehicle.routes'));
app.use('/trips', require('./routes/trip.routes'));
app.use('/analytics', require('./routes/analytics.routes'));

// 404 handler
app.use(notFound);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});