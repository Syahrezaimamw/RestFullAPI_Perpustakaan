import express from 'express'
import { getAllBuku,getBukuById,createBuku,deleteBuku,updateBuku } from '../controller/bukuController.js' 

 const routerBuku=express.Router()
 routerBuku.get('/',getAllBuku)
routerBuku.get('/find/:id',getBukuById)
routerBuku.post('/create',createBuku)
routerBuku.delete('/delete/:id',deleteBuku)
routerBuku.put('/update/:id',updateBuku)
 
export default routerBuku