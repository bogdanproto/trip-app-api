import { Schema } from 'mongoose';
import validator from 'validator';

export const mongooseUserShema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: value => validator.isEmail(value),
        message: 'Email has wrong format',
      },
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },

    token: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);
