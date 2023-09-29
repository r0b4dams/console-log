import { extendType, inputObjectType } from 'nexus';
import { User } from '../../../models/User';

const createUserInput = inputObjectType({
  name: 'createUserInput',
  definition: (t) => {
    t.nonNull.string('username');
    t.nonNull.string('email');
  },
});

export const createUser = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createUser', {
      type: 'User',
      args: { data: createUserInput },
      resolve: async (_, args) => await User.create({ ...args.data }),
    });
  },
});
