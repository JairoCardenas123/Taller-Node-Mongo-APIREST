import express from "express";
import { obtenerProductos } from "../controllers/productos.controllers.js";

const router = express.Router();

router.get("/obtener", obtenerProductos);

export default router;
