import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema(
    {
    categoria:{
        type:String,
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
        trim:true
    }
    },
    {
        timestamps:true
    }   
)

const Empleado = mongoose.model("Empleado",empleadosSchema);

export default Empleado;