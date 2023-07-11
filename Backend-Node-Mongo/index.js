import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import CategoriaRouter from "./routes/categorias.routes.js";
import productosRouter from "./routes/productos.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());

app.use("/categoria",CategoriaRouter);
app.use("/producto", productosRouter);

conectarDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Super Server web listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
