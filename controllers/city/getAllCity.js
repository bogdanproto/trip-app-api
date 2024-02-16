import { status } from '../../const/index.js';
import { City } from '../../models/CIty.js';

export const getAllCity = async (req, res) => {
  const cities = await City.find();

  res.json({ ...status.GET_SUCCESS, data: { cities } });
};
