import mongoose from "mongoose";

const clientesSchema = mongoose.Schema({
    Categoria:{
        type:String,
        required:true,
        trim:true
    },
    Producto:{
        type:String,
        required:true,
        trim:true
    },
    Talla:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
    timetamps:true
    }
)

const Cliente = mongoose.model("cliente",clientesSchema)

export default Cliente

