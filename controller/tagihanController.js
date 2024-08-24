import db from '../config/connection.js'
import { response } from '../message/response.js'

export const getAllTagihan=(req,res)=>{
    const sql='SELECT * FROM tagihan'
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil keseluruhan data tagihan',res)
    })
}

export const getTagihanById=(req,res)=>{
    const id = req.params.id
    const sql=`SELECT * FROM tagihan WHERE id_tagihan = ${id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil data tagihan berdarkan id ',res)
    })
}

export const createTagihan=(req,res)=>{
    const {id_transaksi,status,denda}=req.body
    const sql=`INSERT INTO tagihan (id_transaksi, status, denda) VALUES (?, ?, ?)`

    db.query(sql,[id_transaksi,status,denda],(err,result)=>{
        if(err) throw err
        response(201,result,'menambah data',res)

    })
}

export const deleteTagihan = (req,res)=>{
    const sql =`DELETE FROM tagihan WHERE id_tagihan = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'menghapus data  data',res)

    })
}

export const updateTagihan =(req,res)=>{
    const {id_transaksi,status,denda}=req.body
    const sql=`UPDATE tagihan SET id_transaksi = "${id_transaksi}",status = "${status}", denda = "${denda}" WHERE id_tagihan = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengupdate data data',res)

    })
}