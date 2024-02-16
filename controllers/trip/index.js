import { ctrlDecorator } from '../../helpers/index.js';
import { getAllTrip } from './getAllTrip.js';
import { createTrip } from './createTrip.js';

export default {
  getAllTrip: ctrlDecorator(getAllTrip),
  createTrip: ctrlDecorator(createTrip),
};
