export const resolvers = {
  Query: {
    hi: async (parent, args, context) => {
      return { msg: 'Hello, WOrld!' };
    },
  },
};
