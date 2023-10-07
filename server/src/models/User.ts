import { Schema, model } from 'mongoose';
import { NexusGenObjects as Type } from '../@types/schema';

const userSchema = new Schema<Type['User']>({
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
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export const User = model<Type['User']>('User', userSchema);
