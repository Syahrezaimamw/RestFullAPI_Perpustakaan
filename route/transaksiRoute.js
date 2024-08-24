import express from 'express'
import { getAllTransaksi,getTransaksiById,createTransaksi,deleteTransaksi,updatetransaksi } from '../controller/transaksiController.js' 
 const routerTransaksi=express.Router()
 routerTransaksi.get('/',getAllTransaksi)
routerTransaksi.get('/find/:id',getTransaksiById)
routerTransaksi.post('/create',createTransaksi)
routerTransaksi.delete('/delete/:id',deleteTransaksi)
routerTransaksi.put('/update/:id',updatetransaksi)
 
export default routerTransaksi