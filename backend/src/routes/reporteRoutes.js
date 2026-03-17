import express from "express";
import {renderReporte}  from "../controllers/reporteController.js";

const router = express.Router();

router.get("/", renderReporte);

export default router;