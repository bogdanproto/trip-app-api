import express from 'express';
import { cityPath } from '../const/index.js';
import cityCtrl from '../controllers/city/index.js';
import { authenticate } from '../middlewares/authenticate.js';

// ============================================================

const cityRouter = express.Router();

cityRouter.get(cityPath.BASE, authenticate, cityCtrl.getAllCity);

export default cityRouter;
