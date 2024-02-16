import { ctrlDecorator } from '../../helpers/index.js';
import { getAllCity } from './getAllCity.js';

export default {
  getAllCity: ctrlDecorator(getAllCity),
};
