import { extendType } from 'nexus';
import { User } from '../../../models/User';

export const getOneUser = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getOneUser', {
      type: 'User',
      resolve: async (_root, _args, ctx) => await User.findById(ctx.id),
    });
  },
});
