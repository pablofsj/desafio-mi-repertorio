import { cancionModel } from "../models/cancion.model.js";

const todasCanciones = async (_,res) =>{
    try {
        const todas = await cancionModel.obtenerCanciones()
        return res.json(todas)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor'})
    }
}

const nuevaCancion = async (req,res) => {
    try {
        const {titulo, artista, tono} = req.body
        const nueva = await cancionModel.nueva(titulo, artista, tono)
        return res.json(nueva)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor'})  
    }
}

const modificaCancion = async (req,res) => {
    try {
        const {id} = req.params
        const {titulo, artista, tono} = req.body
        const modifica = await cancionModel.modifica(id, titulo, artista, tono)
        return res.json(modifica)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor'})  
    }
}

const borraCancion = async (req,res) => {
    try {
        const {id} = req.params
        const borra = await cancionModel.borra(id)
        return res.json(borra)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor'})  
    }
}

export const cancionController = {
    todasCanciones,
    nuevaCancion,
    modificaCancion,
    borraCancion
}