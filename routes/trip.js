import express from 'express';
import { tripPath } from '../const/index.js';
import tripCtrl from '../controllers/trip/index.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateBody } from '../middlewares/validateBoady.js';
import { joiTripCreateShema } from '../schema/trip/joiTripSchema.js';

// ============================================================

const tripRouter = express.Router();

tripRouter.get(tripPath.BASE, authenticate, tripCtrl.getAllTrip);

tripRouter.post(
  tripPath.BASE,
  authenticate,
  validateBody(joiTripCreateShema),
  tripCtrl.createTrip
);

export default tripRouter;
