import { extendType } from 'nexus';

export const getUser = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('me', {
      type: 'User',
      resolve: () => {
        return {
          id: '1234',
          username: 'rob',
          email: 'rob@rob.rob',
        };
      },
    });
  },
});
