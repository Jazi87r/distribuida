import express from "express";
import  {renderAuth}  from "../controllers/authController.js";

const router = express.Router();

router.get("/", renderAuth);

export default router;