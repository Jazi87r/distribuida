import {InfraccionesPorUsuario, InfracionesPorVehiculo, getTopMonth, getTotalInfractions, getTopOwner, getTopVehicleType} from "../models/reporteModel.js";


export const renderReporte = async (req, res) => {

    console.log("HIT THE CONTROLLER");

    const { data: UsuarioData, error: UsuarioError } = await InfraccionesPorUsuario();

     if (UsuarioError) {
        return res.status(500).json({ error: UsuarioError.message });
    }

    const {data: VehiculoData, error: VehiculoError} = await InfracionesPorVehiculo();

     if (VehiculoError) {
        return res.status(500).json({ error: VehiculoError.message });
    }

    const {data: TopMonthData, error: TopMonthError} = await getTopMonth();

        if (TopMonthError) {
        return res.status(500).json({ error: TopMonthError.message });
    }

    const {data: TotalInfractionsData, error: TotalInfractionsError} = await getTotalInfractions();

        if (TotalInfractionsError) {
        return res.status(500).json({ error: TotalInfractionsError.message });
    }

    const {data: TopOwnerData, error: TopOwnerError} = await getTopOwner();

        if (TopOwnerError) {
        return res.status(500).json({ error: TopOwnerError.message });
    }


    const {data: TopVehicleTypeData, error: TopVehicleTypeError} = await getTopVehicleType();

        if (TopVehicleTypeError) {
        return res.status(500).json({ error: TopVehicleTypeError.message });
    }

    console.log("Fetched reporte data usuario: CONTROLLER", UsuarioData);
   console.log("Fetched reporte data vehiculo: CONTROLLER", VehiculoData);
   console.log("Fetched reporte data top month: CONTROLLER", TopMonthData);
   console.log("Fetched reporte data total infractions: CONTROLLER", TotalInfractionsData);
   console.log("Fetched reporte data top owner: CONTROLLER", TopOwnerData);
   console.log("Fetched reporte data top vehicle type: CONTROLLER", TopVehicleTypeData);
    console.log("Rendered propietarios page"); 
    
    res.render("reporte.ejs", { UsuarioData: UsuarioData, VehiculoData: VehiculoData, TopMonthData: TopMonthData, TotalInfractionsData: TotalInfractionsData, TopOwnerData: TopOwnerData, TopVehicleTypeData: TopVehicleTypeData });



};