import supabase from "../config/supabase.js"; //there may be an issue with this import, check the path later

const InfraccionesPorUsuario = async () => {

 try {
        const { data, error } = await supabase
            .from("propietario")
            .select(`
                id,
                nombre,
                vehiculo (
                    id,
                    infraccion (
                        id
                    )
                )
            `);

        if (error) {
            console.error("Error fetching report:", error);
            return { data: null, error };
        }

        // Transform the result to count infractions
        const result = data.map((prop) => {
            let total = 0;

            if (prop.vehiculo) {
                prop.vehiculo.forEach((veh) => {
                    if (veh.infraccion) {
                        total += veh.infraccion.length;
                    }
                });
            }

            return {
                propietario_id: prop.id,
                nombre: prop.nombre,
                total_infracciones: total
            };
        });

        return { data: result, error: null };

    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }

};

const InfracionesPorVehiculo = async () => {
    try {
        const { data, error } = await supabase
            .rpc("get_infractions_per_vehicle");

        if (error) {
            console.error("Error fetching report:", error);
            return { data: null, error };
        }

        return { data, error: null };

    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const getTopMonth = async () => {
    try {
        const { data, error } = await supabase
            .rpc("get_month_with_most_infractions");

        if (error) {
            console.error("Error:", error);
            return { data: null, error };
        }

        return { data, error: null };

    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const getTotalInfractions = async () => {
    try {
        const { data, error } = await supabase
            .rpc("get_total_infractions");

        if (error) {
            console.error("Error fetching total:", error);
            return { data: null, error };
        }

        return { data, error: null };

    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

const getTopOwner = async () => {
    try {
        const { data, error } = await supabase
            .rpc("get_top_owner_by_infractions");

        if (error) {
            console.error("Error fetching top owner:", error);
            return { data: null, error };
        }

        return { data, error: null };

    } catch (err) {
        console.error("Unexpected error:", err);
        return { data: null, error: err };
    }
};

export { InfraccionesPorUsuario, InfracionesPorVehiculo, getTopMonth, getTotalInfractions, getTopOwner };

