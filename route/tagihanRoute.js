import express from 'express'
import { getTagihanById,getAllTagihan,createTagihan,deleteTagihan,updateTagihan } from '../controller/tagihanController.js'
 
 const routerTagihan=express.Router()
 routerTagihan.get('/',getAllTagihan)
routerTagihan.get('/find/:id',getTagihanById)
routerTagihan.post('/create',createTagihan)
routerTagihan.delete('/delete/:id',deleteTagihan)
routerTagihan.put('/update/:id',updateTagihan)
 
export default routerTagihan