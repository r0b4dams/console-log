import { Schema, model } from 'mongoose';
import { NexusGenObjects as Type } from '../@types/schema';

const userSchema = new Schema<Type['User']>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    _id: false,
    versionKey: false,
  },
);

export const User = model<Type['User']>('User', userSchema);
