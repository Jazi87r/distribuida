import {
  createInfraccion,
  getInfracciones,
  deleteInfraccion,
  updateInfraccion
} from "../models/infraccionModel.js";

export const infraccionResolver = {
  Query: {
    infracciones: async () => {
      const { data, error } = await getInfracciones();
      if (error) throw new Error(error.message);
      return data;
    }
  },

  Mutation: {
    createInfraccion: async (_, { input }) => {
      const { data, error } = await createInfraccion(input);
      if (error) throw new Error(error.message);
      return data;
    },

    updateInfraccion: async (_, { id, input }) => {
      const { data, error } = await updateInfraccion(id, input);
      if (error) throw new Error(error.message);
      return data;
    },

    deleteInfraccion: async (_, { id }) => {
      const { error } = await deleteInfraccion(id);
      if (error) throw new Error(error.message);
      return true;
    }
  }
};