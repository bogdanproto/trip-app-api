import { status } from '../../const/index.js';
import { Trip } from '../../models/Trip.js';

export const createTrip = async (req, res) => {
  const newTrip = req.body;
  const { _id } = req.user;
  newTrip.userId = _id;

  const trip = await (
    await Trip.create(newTrip)
  ).populate([
    {
      path: 'item',
      select: 'title imgCloud',
    },
  ]);

  res.json({
    ...status.CREATED,
    trip,
  });
};
