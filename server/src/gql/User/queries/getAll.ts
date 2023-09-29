import { extendType } from 'nexus';
import { User } from '../../../models/User';

export const getAllUsers = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('getAllUsers', {
      type: 'User',
      resolve: async () => await User.find({}),
    });
  },
});
