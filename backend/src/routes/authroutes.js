import express from "express";
import  {renderAuth, handleLogin}  from "../controllers/authController.js";

const router = express.Router();

router.get("/", renderAuth);
router.post("/login", handleLogin);


export default router;