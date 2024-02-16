import { Schema } from 'mongoose';

export const mongooseTripShema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: 'city',
      required: [true, 'City is required'],
    },
    startDate: {
      type: String,
      required: [true, 'startData is required'],
    },
    endDate: {
      type: String,
      required: [true, 'endData is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'userId is required'],
    },
  },
  { timestamps: true }
);
