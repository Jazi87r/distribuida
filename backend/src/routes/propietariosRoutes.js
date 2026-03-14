import express from "express";
import  {renderPropietarios, createPropietarioController, deletePropietarioController, updatePropietarioController}  from "../controllers/propietariosController.js";

const router = express.Router();

router.get("/", renderPropietarios); // (read method) renders the propietarios page with data

router.post("/create", createPropietarioController);

router.post("/delete/:id", deletePropietarioController);

router.post("/update/:id", updatePropietarioController);

export default router;