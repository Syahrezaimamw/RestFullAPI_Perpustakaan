import db from '../config/connection.js'
import { response } from '../message/response.js'

export const getAllPetugas=(req,res)=>{
    const sql='SELECT * FROM petugas'
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil keseluruhan data petugas',res)
    })
}

export const getPetugasById=(req,res)=>{
    const id = req.params.id
    const sql=`SELECT * FROM petugas WHERE id_petugas = ${id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil data petugas berdarkan id ',res)
    })
}

export const createPetugas=(req,res)=>{
    const {nama_petugas,password,email}=req.body
    const sql=`INSERT INTO petugas (nama_petugas, password, email) VALUES (?, ?, ?)`

    db.query(sql,[nama_petugas,password,email],(err,result)=>{
        if(err) throw err
        response(201,result,'menambah data',res)

    })
}

export const deletePetugas = (req,res)=>{
    const sql =`DELETE FROM petugas WHERE id_petugas = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'menghapus data  data',res)

    })
}

export const updatePetugas =(req,res)=>{
    const {nama_petugas,password,email}=req.body
    const sql=`UPDATE petugas SET nama_petugas = "${nama_petugas}",password = "${password}", email = "${email}" WHERE id_petugas = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengupdate data data',res)

    })
}