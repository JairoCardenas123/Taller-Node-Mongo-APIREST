import express from "express";
import { obtenerProductos } from "../controllers/productos.controllers.js";

const router = express.Router();

router.get("/all", obtenerProductos);

export default router;
