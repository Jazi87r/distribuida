import {getPropietarios, createPropietario, deletePropietario, updatePropietario} from "../models/propietarioModel.js"; // Adjust the path if necessary

export const renderPropietarios = async(req, res) => {
    
    const { data, error } = await getPropietarios();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.render("propietarios.ejs", { pageCSS: "homepage.css", propietarios: data });
    console.log("Fetched propietarios data: CONTROLLER", data);
    console.log("Rendered propietarios page");
    
};

export const createPropietarioController = async (req, res) => {
    console.log("Received request to create propietario. WE HIT THE CONTROLLER!");
    const { tipo, identificacion, nombre, direccion } = req.body;
    console.log("Received propietario data:", { tipo, identificacion, nombre, direccion });
    try {
        const { data, error } = await createPropietario({ tipo, identificacion, nombre, direccion });
        if (error) {
            console.error("Error creating propietario:", error);
            return res.status(500).json({ error: error.message });
        }
        console.log("Created propietario:", data);
        res.redirect("/propietarios"); // Redirect to the propietarios page after successful creation
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ error: "An unexpected error occurred" });
    }
}

export const deletePropietarioController = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const { error } = await deletePropietario(id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    console.log("Deleted propietario with id: CONTROLLEER", id);

    return res.redirect("/propietarios"); // or wherever you want to go after deletion
};

export const updatePropietarioController = async (req, res) => {
    const { id } = req.params;
    const { tipo, identificacion, nombre, direccion } = req.body;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    if (!tipo || !identificacion || !nombre || !direccion) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const { data, error } = await updatePropietario(id, { tipo, identificacion, nombre, direccion });

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.redirect("/propietarios"); // or wherever you want to go after updating
};
