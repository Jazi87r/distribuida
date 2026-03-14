import express from "express";
import {createVehiculo, deleteVehiculo, getVehiculos, updateVehiculo} from "../models/vehiculoModel.js"; // Adjust the path if necessary

export const renderVehiculos = async (req, res) => {
    const { data, error } = await getVehiculos();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.render("homepage.ejs", { pageCSS: "homepage.css", vehiculos: data });
    console.log("Fetched vehiculos data: CONTROLLER", data);
    console.log("Rendered vehiculos page");
};

export const createVehiculoController = async (req, res) => {
    console.log("Received request to create vehiculo. WE HIT THE CONTROLLER!");
    const { placa, marca, matricula, fecha_matricula, tipo, propietario_id } = req.body;
    console.log("Received data:", req.body);
    try {
        const { data, error } = await createVehiculo({ placa, marca, matricula, fecha_matricula, tipo, propietario_id });
        if (error) {
            console.error("Error creating vehiculo:", error);
            return res.status(500).json({ error: error.message });
        }
        console.log("Created vehiculo:", data);
        res.redirect("/vehiculos"); // Redirect to the vehiculos page after successful creation
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ error: "An unexpected error occurred" });
    }
}

export const deleteVehiculoController = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    const { error } = await deleteVehiculo(id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    console.log("Deleted vehiculo with id: CONTROLLEER", id);

    return res.redirect("/vehiculos"); // or wherever you want to go after deletion
};

export const updateVehiculoController = async (req, res) => {
    const { id } = req.params;
    const { placa, marca, matricula, fecha_matricula, tipo, propietario_id } = req.body;
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    if (!placa || !marca || !matricula || !fecha_matricula || !tipo || !propietario_id) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const { data, error } = await updateVehiculo(id, { placa, marca, matricula, fecha_matricula, tipo, propietario_id });

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.redirect("/vehiculos"); // or wherever you want to go after updating
};


