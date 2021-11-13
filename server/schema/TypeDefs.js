const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllPeople: People!
    getAllPeoplePage(id: Int!): People!
    getPeopleByName(name: String!): People!
    getPeopleByNamePage(name: String!, id: Int!): People!
    getPersonById(id: Int!): Person!
  }

  type People {
    previous: String
    next: String
    results: [Person!]!
  }

  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: Planet!
  }

  type Planet {
    name: String!
  }
`;

module.exports = { typeDefs };
