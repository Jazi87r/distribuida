import express from "express";
import  {renderVehiculos}  from "../controllers/vehiculosController.js";

const router = express.Router();

router.get("/", renderVehiculos);


export default router;