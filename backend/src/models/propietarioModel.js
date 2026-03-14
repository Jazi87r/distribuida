import supabase from "../config/supabase.js"; //there may be an issue with this import, check the path later

const createPropietario = async ({ tipo, identificacion, nombre, direccion }) => {    

    console.log("Creating propietario with data:", { tipo, identificacion, nombre, direccion });
    try {
        const { data, error } = await supabase
            .from("propietario")
            .insert({ tipo, identificacion, nombre, direccion })
            .select()
            .single();

            
        if (error) {
            console.error("Error inserting propietario:", error);
            return { data: null, error: error };
        }
        console.log("Inserted propietario:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const getPropietarios = async () => {
    try {
        const { data, error } = await supabase
            .from("propietario")
            .select("*");

        if (error) {
            console.error("Error fetching propietarios:", error);
            return { data: null, error };
        }
        console.log("Fetched propietarios:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const deletePropietario = async (id) => {
    try {
        const { error } = await supabase
            .from("propietario")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Error deleting propietario:", error);
            return { error };
        }
        console.log("Deleted propietario with id:", id);
        return { error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: err };
    }
};

const updatePropietario = async (id, { tipo, identificacion, nombre, direccion }) => {
    try {
        const { data, error } = await supabase
            .from("propietario")
            .update({ tipo, identificacion, nombre, direccion })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            console.error("Error updating propietario:", error);
            return { data: null, error };
        }
        console.log("Updated propietario: MODEEEEL", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

export { createPropietario, getPropietarios, deletePropietario, updatePropietario };
