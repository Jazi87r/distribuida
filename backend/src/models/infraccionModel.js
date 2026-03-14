import supabase from "../config/supabase.js"; 

const createInfraccion = async ({ identificacion, fecha, tipo, vehiculo_id }) => {
    console.log("Creating infraccion with data:", { identificacion, fecha, tipo, vehiculo_id });
    try {
        const { data, error } = await supabase
            .from("infraccion")
            .insert({ identificacion, fecha, tipo, vehiculo_id })
            .select()
            .single(); 
        if (error) {
            console.error("Error inserting infraccion:", error);
            return { data: null, error: error };
        }
        console.log("Inserted infraccion:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const getInfracciones = async () => {
    try {
        const { data, error } = await supabase
            .from("infraccion")
            .select("*");
        if (error) {
            console.error("Error fetching infracciones:", error);
            return { data: null, error };
        }
        console.log("Fetched infracciones:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const deleteInfraccion = async (id) => {
    try {
        const { error } = await supabase
            .from("infraccion")
            .delete()
            .eq("id", id);
        if (error) {
            console.error("Error deleting infraccion:", error);
            return { data: null, error: error };
        }
        console.log("Deleted infraccion with ID:", id);
        return { data: null, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const updateInfraccion = async (id, { identificacion, fecha, tipo, vehiculo_id }) => {
    try {
        const { data, error } = await supabase
            .from("infraccion")
            .update({ identificacion, fecha, tipo, vehiculo_id })
            .eq("id", id);
        if (error) {
            console.error("Error updating infraccion:", error);
            return { data: null, error: error };
        }
        console.log("Updated infraccion:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};


export { createInfraccion, deleteInfraccion, getInfracciones, updateInfraccion };