import { extendType, inputObjectType } from 'nexus';
import { User } from '../../../models/User';

const updateUserInput = inputObjectType({
  name: 'updateUserInput',
  definition: (t) => {
    t.string('username');
    t.string('email');
    t.string('avatar');
  },
});

export const updateUser = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('updateUser', {
      type: 'User',
      args: { data: updateUserInput },
      resolve: async (_root, args, ctx) => await User.findByIdAndUpdate(ctx.id, { ...args.data }),
    });
  },
});
