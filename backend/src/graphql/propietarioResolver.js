import {
  createPropietario,
  getPropietarios,
  deletePropietario,
  updatePropietario
} from "../models/propietarioModel.js";

export const propietarioResolver = {
  Query: {
    propietarios: async () => {
      const { data, error } = await getPropietarios();
      if (error) throw new Error(error.message);
      return data;
    }
  },

  Mutation: {
    createPropietario: async (_, { input }) => {
      const { data, error } = await createPropietario(input);
      if (error) throw new Error(error.message);
      return data;
    },

    updatePropietario: async (_, { id, input }) => {
      const { data, error } = await updatePropietario(id, input);
      if (error) throw new Error(error.message);
      return data;
    },

    deletePropietario: async (_, { id }) => {
      const { error } = await deletePropietario(id);
      if (error) throw new Error(error.message);
      return true;
    }
  }
};