import Categoria from "../models/Categorias.js";

const obtenerCategorias = async(req,res) =>{

    const categorias = await Categoria.find();

    res.json(categorias);
}

const agregarCategoria = async (req,res) => {

    const categoria = new Categoria(req.body)

    try {
        const nuevaCategoria = await categoria.save();

        res.json(nuevaCategoria);

    } catch (error) {
        console.log(error);
    }
}

const borrarCategoria = async (req,res) =>{
    try {
        await Categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error:"Categoria No Existe"})
    }
}

const actualizarCategoria = async (req,res) =>{
    try {
        const categoria = await Categoria.findOne({_id:req.params.id})

        if(req.body.categoria){
            categoria.categoria = req.body.categoria;
        }

        if(req.body.producto){
            categoria.producto = req.body.producto;
        }

        if(req.body.talla){
            categoria.talla = req.body.talla;
        }

        await categoria.save();
        res.send(categoria)
    } catch (error) {
        res.status(404),
        res.status({error:"categoria no existe"})
    }
}

export {obtenerCategorias,agregarCategoria,borrarCategoria,actualizarCategoria}