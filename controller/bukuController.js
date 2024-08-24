import db from '../config/connection.js'
import { response } from '../message/response.js'

export const getAllBuku=(req,res)=>{
    const sql='SELECT * FROM buku'
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil keseluruhan data buku',res)
    })
}

export const getBukuById=(req,res)=>{
    const id = req.params.id
    const sql=`SELECT * FROM buku WHERE id_buku = ${id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil data buku berdarkan id ',res)
    })
}

export const createBuku=(req,res)=>{
    const {judul,penulis,tanggal_terbit,nomer_rak,edisi}=req.body
    const sql=`INSERT INTO buku (judul, penulis, tanggal_terbit, nomer_rak, edisi) VALUES (?, ?, ?, ?, ?)`

    db.query(sql,[judul,penulis,tanggal_terbit,nomer_rak,edisi],(err,result)=>{
        if(err) throw err
        response(201,result,'menambah data',res)

    })
}

export const deleteBuku = (req,res)=>{
    const sql =`DELETE FROM buku WHERE id_buku = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'menghapus data  data',res)

    })
}

export const updateBuku =(req,res)=>{
    const {judul,penulis,tanggal_terbit,nomer_rak,edisi}=req.body
    const sql=`UPDATE buku SET judul = "${judul}",penulis = "${penulis}", tanggal_terbit = "${tanggal_terbit}",nomer_rak = "${nomer_rak}",edisi = "${edisi}" WHERE id_buku = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengupdate data  data',res)

    })
}