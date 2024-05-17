import { Router } from "express";
import { cancionController } from "../controllers/cancion.controller.js";


const router = Router()

router.get('/canciones', cancionController.todasCanciones)
router.post('/cancion', cancionController.nuevaCancion)
router.put('/cancion/:id', cancionController.modificaCancion)
router.delete('/cancion/:id', cancionController.borraCancion)

export default router