import express from "express";
import  {renderPropietarios}  from "../controllers/propietariosController.js";

const router = express.Router();

router.get("/", renderPropietarios);

export default router;