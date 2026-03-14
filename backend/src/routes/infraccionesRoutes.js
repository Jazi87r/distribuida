import express from "express";
import  {renderInfracciones, createInfraccionController, deleteInfraccionController, updateInfraccionController}  from "../controllers/infraccionesController.js";

const router = express.Router();

router.get("/", renderInfracciones);

router.post("/create", createInfraccionController);

router.post("/delete/:id", deleteInfraccionController);

router.post("/update/:id", updateInfraccionController);


export default router;