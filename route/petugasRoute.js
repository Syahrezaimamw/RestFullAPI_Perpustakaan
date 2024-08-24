import express from 'express'
import { getPetugasById,
    getAllPetugas,
    createPetugas,
    deletePetugas,
    updatePetugas
    
 } from '../controller/petugasController.js'
 
 const routerPetugas=express.Router()
 routerPetugas.get('/',getAllPetugas)
routerPetugas.get('/find/:id',getPetugasById)
routerPetugas.post('/create',createPetugas)
routerPetugas.delete('/delete/:id',deletePetugas)
routerPetugas.put('/update/:id',updatePetugas)
 
export default routerPetugas