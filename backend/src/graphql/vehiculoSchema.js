export const vehiculoTypeDefs = `#graphql
  type Vehiculo {
    id: ID!
    matricula: Int!
    placa: String!
    marca: String!
    fecha_matricula: String!
    tipo: String!
    propietario_id: Int!
  }

  input VehiculoInput {
    matricula: Int!
    placa: String!
    marca: String!
    fecha_matricula: String!
    tipo: String!
    propietario_id: Int!
  }

  extend type Query {
    vehiculos: [Vehiculo!]!
  }

  extend type Mutation {
    createVehiculo(input: VehiculoInput!): Vehiculo!
    updateVehiculo(id: ID!, input: VehiculoInput!): Vehiculo!
    deleteVehiculo(id: ID!): Boolean!
  }
`;