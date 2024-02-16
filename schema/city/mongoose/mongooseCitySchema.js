import { Schema } from 'mongoose';

export const mongooseCityShema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, 'Set city'],
    },
    imgCloud: {
      type: String,
      required: [true, 'ImgCloud is required'],
    },
  },
  { timestamps: true }
);
