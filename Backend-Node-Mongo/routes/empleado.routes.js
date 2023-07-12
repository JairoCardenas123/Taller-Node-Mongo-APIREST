import express  from "express";
import { obtenerEmpleados } from "../controllers/empleados.controllers.js";

const router = express.Router()

router.get("/emp",obtenerEmpleados)

export default router