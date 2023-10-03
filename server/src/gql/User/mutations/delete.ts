import { extendType } from 'nexus';
import { User } from '../../../models/User';

export const deleteUser = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('deleteUser', {
      type: 'String',
      resolve: async (_root, _args, ctx) => {
        const deleted = await User.findByIdAndDelete(ctx.id);
        return deleted.id;
      },
    });
  },
});
