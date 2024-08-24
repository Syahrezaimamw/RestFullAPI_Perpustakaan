import db from '../config/connection.js'
import { response } from '../message/response.js'

export const getAllAnggota=(req,res)=>{
    const sql='SELECT * FROM anggota'
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil keseluruhan data anggota',res)
    })
}

export const getAnggotaById=(req,res)=>{
    const id = req.params.id
    const sql=`SELECT * FROM anggota WHERE id_anggota = ${id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil data anggota berdarkan id ',res)
    })
}

export const createAnggota=(req,res)=>{
    const {nama_anggota,no_hp,alamat,tanggal_daftar,jumlah_denda}=req.body
    const sql=`INSERT INTO anggota (nama_anggota, no_hp, alamat, tanggal_daftar, jumlah_denda) VALUES (?, ?, ?, ?, ?)`

    db.query(sql,[nama_anggota,no_hp,alamat,tanggal_daftar,jumlah_denda],(err,result)=>{
        if(err) throw err
        response(201,result,'menambah data',res)

    })
}

export const deleteAnggota = (req,res)=>{
    const sql =`DELETE FROM anggota WHERE id_anggota = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'menghapus data  data',res)

    })
}

export const updateAnggota =(req,res)=>{
    const {nama_anggota,no_hp,alamat,tanggal_daftar,jumlah_denda}=req.body
    const sql=`UPDATE anggota SET nama_anggota = "${nama_anggota}",no_hp = "${no_hp}", alamat = "${alamat}", tanggal_daftar = "${tanggal_daftar}",jumlah_denda = "${jumlah_denda}" WHERE id_anggota = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengupdate data  data',res)

    })
}