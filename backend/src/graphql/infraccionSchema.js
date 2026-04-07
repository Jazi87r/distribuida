export const infraccionTypeDefs = `#graphql 
  type Infraccion {
    id: ID!
    identificacion: Int!
    fecha: String!
    tipo: String!
    vehiculo_id: Int!
  }

  input InfraccionInput {
    identificacion: Int!
    fecha: String!
    tipo: String!
    vehiculo_id: Int!
  }

  extend type Query {
    infracciones: [Infraccion!]!
  }

  extend type Mutation {
    createInfraccion(input: InfraccionInput!): Infraccion!
    updateInfraccion(id: ID!, input: InfraccionInput!): Infraccion!
    deleteInfraccion(id: ID!): Boolean!
  }
`;