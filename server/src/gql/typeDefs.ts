// import { readFileSync } from 'fs';
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';
// import gql from 'graphql-tag';

// const __dirname = dirname(fileURLToPath(import.meta.url));

// export const typeDefs = gql(
//   readFileSync(resolve(__dirname, 'schema.gql'), {
//     encoding: 'utf-8',
//   })
// );

export const typeDefs = `
  type Hello {
    msg: String
  }

  type Query {
    hi: Hello
  }
`;
