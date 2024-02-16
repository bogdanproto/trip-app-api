import { model } from 'mongoose';
import { mongooseTripShema } from '../schema/trip/mongooseTripSchema.js';

export const Trip = model('trip', mongooseTripShema);
