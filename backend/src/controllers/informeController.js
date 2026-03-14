import {getPropietarios} from "../models/propietarioModel.js";
import { getInfracciones } from "../models/infraccionModel";

export const renderInforme = async (req, res) => {

    const { propietariosData, propietariosError } = await getPropietarios();
    if (propietariosError) {
        console.error("Error fetching propietarios data:", propietariosError);
        return res.status(500).json({ error: propietariosError.message });
    }

    const { infraccionesData, infraccionesError } = await getInfracciones();
    if (infraccionesError) {
        console.error("Error fetching infracciones data:", infraccionesError);
        return res.status(500).json({ error: infraccionesError.message });
    }

    propietariosData.forEach(propietario => {

        console.log("Propietario:", propietario.id);
        
    });

    infraccionesData.forEach(infraccion => {

        console.log("id del propietario de la Infraccion:", infraccion.propietario_id);
    });



};