import mongoose from "mongoose";

const categoriasSchema = mongoose.Schema(
    {
    categoria: {
        type: String,
        required:true,
        trim:true 
    },
    producto:{
        type:String,
        required:true,
        trim:true
    },
    talla:{
        type:String,
        required:true,
        trim:true,
    }
    }, 
    {
        timestamps:true,
    }
);

const Categoria = mongoose.model("Categoria",categoriasSchema);

export default Categoria;