import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import routerPetugas from './route/petugasRoute.js'
import routerAnggota from './route/anggotaRoute.js'
import routerBuku from './route/bukuRoute.js'
import routerTagihan from './route/tagihanRoute.js'
import routerTransaksi from './route/transaksiRoute.js'

const app = express()

app.use(bodyParser.json())

dotenv.config()
const PORT = process.env.PORT




app.use('/petugas',routerPetugas)
app.use('/anggota',routerAnggota)
app.use('/buku',routerBuku)
app.use('/tagihan',routerTagihan)
app.use('/transaksi',routerTransaksi)



app.listen(PORT,()=>{
    console.log('berjalan di http://localhost:3100')
})