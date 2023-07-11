import mongoose from "mongoose";

const productosSchema = mongoose.Schema(
  {
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    producto: {
      type: String,
      required: true,
      trim: true,
    },
    talla: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Producto = mongoose.model("Producto", productosSchema);

export default Producto;
