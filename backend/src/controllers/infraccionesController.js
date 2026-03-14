import express from "express";  
import {createInfraccion, deleteInfraccion, getInfracciones, updateInfraccion} from "../models/infraccionModel.js"; // Adjust the path if necessary

export const renderInfracciones = async (req, res) => {

    const { data, error } = await getInfracciones();

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.render("infracciones.ejs", { pageCSS: "homepage.css", infracciones: data });
    console.log("Fetched infracciones data: CONTROLLER", data);
    console.log("Rendered infracciones page");
};

export const createInfraccionController = async (req, res) => {
    console.log("Received request to create infraccion. WE HIT THE CONTROLLER!");
    const { identificacion, fecha, tipo, vehiculo_id } = req.body;
    console.log("Received infraccion data:", { identificacion, fecha, tipo, vehiculo_id });
    try {
        // Call the model function to create the infraccion
        const { data, error } = await createInfraccion({ identificacion, fecha, tipo, vehiculo_id });
        if (error) {
            console.error("Error creating infraccion:", error);
            return res.status(500).json({ error: error.message });
        }
        console.log("Created infraccion:", data);
        res.redirect("/infracciones"); // Redirect to the infracciones page after successful creation
    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ error: "An unexpected error occurred" });
    }
};

export const deleteInfraccionController = async (req, res) => {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }
        const { error } = await deleteInfraccion(id);
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        console.log("Deleted infraccion with id: CONTROLLER", id);
        return res.redirect("/infracciones"); // or wherever you want to go after deletion
};

export const updateInfraccionController = async (req, res) => {
    const { id } = req.params;
    const { identificacion, fecha, tipo, vehiculo_id } = req.body;
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }
    if (!identificacion || !fecha || !tipo || !vehiculo_id) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const { data, error } = await updateInfraccion(id, { identificacion, fecha, tipo, vehiculo_id });
        if (error) {
            console.error("Error updating infraccion:", error);
            return res.status(500).json({ error: error.message });
        }
        console.log("Updated infraccion: CONTROLLER", data);
        return res.redirect("/infracciones"); // or wherever you want to go after updating
    } catch (err) {
        console.error("Unexpected error:", err);
        return res.status(500).json({ error: "An unexpected error occurred" });
    }
};


