import {makeExecutableSchema} from 'graphql-tools';

const typeDefs = `
type Query {
  message(id: ID!): String!
}

type Mutation {
  message(id: ID!): String!
}
`

const resolvers = {
  Query: {
    message: (_, {id}) => new Promise(resolve => {
      setTimeout(function() {
        let message = `response to message ${id}`;
        console.log(message)
        resolve(message);
      }, Math.random() * 10000)
    })
  },
  Mutation: {
    message: (_, {id}) => new Promise(resolve => {
      setTimeout(function() {
        let message = `response to message ${id}`;
        console.log(message)
        resolve(message);
      }, Math.random() * 10000)
    })
  }
}

const schema = makeExecutableSchema({typeDefs, resolvers});
export {
  schema
};
