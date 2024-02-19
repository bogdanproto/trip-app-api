import { status } from '../../const/index.js';
import { Trip } from '../../models/Trip.js';

export const getAllTrip = async (req, res) => {
  const { _id } = req.user;

  const trips = await Trip.find({ userId: _id })
    .select('_id item startDate endDate')
    .populate([
      {
        path: 'item',
        select: 'title imgCloud',
      },
    ]);

  res.json({ ...status.GET_SUCCESS, data: { trips } });
};
