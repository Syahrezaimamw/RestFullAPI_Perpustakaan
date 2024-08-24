import express from 'express'
import { getAnggotaById,getAllAnggota,createAnggota,deleteAnggota,updateAnggota } from '../controller/anggotaController.js'
 
 const routerAnggota=express.Router()
 routerAnggota.get('/',getAllAnggota)
routerAnggota.get('/find/:id',getAnggotaById)
routerAnggota.post('/create',createAnggota)
routerAnggota.delete('/delete/:id',deleteAnggota)
routerAnggota.put('/update/:id',updateAnggota)
 
export default routerAnggota