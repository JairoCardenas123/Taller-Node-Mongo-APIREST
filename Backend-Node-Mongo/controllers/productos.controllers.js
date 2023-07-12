import Producto from "../models/Productos.js";

const obtenerProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

export { obtenerProductos }
