export const propietarioTypeDefs = `#graphql
  type Propietario {
    id: ID!
    tipo: String!
    identificacion: String!
    nombre: String!
    direccion: String!
  }

  input PropietarioInput {
    tipo: String!
    identificacion: String!
    nombre: String!
    direccion: String!
  }

  type Query {
    propietarios: [Propietario!]!
  }

  type Mutation {
    createPropietario(input: PropietarioInput!): Propietario!
    updatePropietario(id: ID!, input: PropietarioInput!): Propietario!
    deletePropietario(id: ID!): Boolean!
  }
`;