import {
  createVehiculo,
  getVehiculos,
  deleteVehiculo,
  updateVehiculo
} from "../models/vehiculoModel.js";

export const vehiculoResolver = {
  Query: {
    vehiculos: async () => {
      const { data, error } = await getVehiculos();
      if (error) throw new Error(error.message);
      return data;
    }
  },

  Mutation: {
    createVehiculo: async (_, { input }) => {
      const { data, error } = await createVehiculo(input);
      if (error) throw new Error(error.message);
      return data;
    },

    updateVehiculo: async (_, { id, input }) => {
      const { data, error } = await updateVehiculo(id, input);
      if (error) throw new Error(error.message);
      return data;
    },

    deleteVehiculo: async (_, { id }) => {
      const { error } = await deleteVehiculo(id);
      if (error) throw new Error(error.message);
      return true;
    }
  }
};