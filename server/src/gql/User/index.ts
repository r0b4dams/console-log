import { objectType } from 'nexus';

export * from './queries';
export * from './mutations';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('username');
    t.nonNull.string('email');
    t.string('avatar');
  },
});
