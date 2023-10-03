import { extendType, inputObjectType } from 'nexus';
import { User } from '../../../models/User';

const signupUserInput = inputObjectType({
  name: 'createUserInput',
  definition: (t) => {
    t.nonNull.string('username');
    t.nonNull.string('email');
  },
});

export const signupUser = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createUser', {
      type: 'User',
      args: { data: signupUserInput },
      resolve: async (_, args) => await User.create({ ...args.data }),
    });
  },
});
