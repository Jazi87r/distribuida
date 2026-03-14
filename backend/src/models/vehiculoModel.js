import supabase from "../config/supabase.js"; //there may be an issue with this import, check the path later

const createVehiculo = async ({ placa, marca, matricula, fecha_matricula, tipo, propietario_id }) => {
    console.log("Received data: MODEL", {placa, marca, matricula, fecha_matricula, tipo, propietario_id});
    try {
        const { data, error } = await supabase
            .from('vehiculo')
            .insert([{ placa, marca, matricula, fecha_matricula, tipo, propietario_id }])
            .select()
            .single();
        if (error) {
            console.error("Error inserting vehiculo:", error);
            return { data: null, error: error.message };
        }
        console.log("Inserted vehiculo:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err.message };
    }
};

const getVehiculos = async () => {
    try {
        const { data, error } = await supabase
            .from("vehiculo")
            .select("*");

        if (error) {
            console.error("Error fetching vehiculos:", error);
            return { data: null, error };
        }
        console.log("Fetched vehiculos:", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const deleteVehiculo = async (id) => {
    try {
        const { error } = await supabase
            .from("vehiculo")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Error deleting vehiculo:", error);
            return { error };
        }
        console.log("Deleted vehiculo with id:", id);
        return { error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { error: err };
    }
};

const  updateVehiculo = async (id, { placa, marca, matricula, fecha_matricula, tipo, propietario_id }) => {
    try {
        const { data, error } = await supabase
            .from("vehiculo")
            .update({ placa, marca, matricula, fecha_matricula, tipo, propietario_id })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            console.error("Error updating vehiculo:", error);
            return { data: null, error };
        }
        console.log("Updated vehiculo: MODEEEEL", data);
        return { data, error: null };
    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

export { createVehiculo, deleteVehiculo, getVehiculos, updateVehiculo };

