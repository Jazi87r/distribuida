import express from "express";
import  {renderVehiculos, createVehiculoController, deleteVehiculoController, updateVehiculoController}  from "../controllers/vehiculosController.js";

const router = express.Router();

router.get("/", renderVehiculos);

router.post("/create", createVehiculoController);

router.post("/delete/:id", deleteVehiculoController);

router.post("/update/:id", updateVehiculoController);





export default router;