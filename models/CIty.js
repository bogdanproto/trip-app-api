import { model } from 'mongoose';
import { mongooseCityShema } from '../schema/city/index.js';

export const City = model('city', mongooseCityShema);
