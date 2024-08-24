import db from '../config/connection.js'
import { response } from '../message/response.js'

export const getAllTransaksi=(req,res)=>{
    const sql='SELECT * FROM transaksi'
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil keseluruhan data transaksi',res)
    })
}

export const getTransaksiById=(req,res)=>{
    const id = req.params.id
    const sql=`SELECT * FROM transaksi WHERE id_transaksi = ${id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengambil data transaksi berdarkan id ',res)
    })
}

export const createTransaksi=(req,res)=>{
    const {id_petugas,id_buku,id_anggota,tanggal_peminjaman,tanggal_pengembalian}=req.body
    const sql=`INSERT INTO transaksi (id_petugas, id_buku, id_anggota, tanggal_peminjaman, tanggal_pengembalian) VALUES (?, ?, ?, ?, ?)`

    db.query(sql,[id_petugas,id_buku,id_anggota,tanggal_peminjaman,tanggal_pengembalian],(err,result)=>{
        if(err) throw err
        response(201,result,'menambah data',res)

    })
}

export const deleteTransaksi = (req,res)=>{
    const sql =`DELETE FROM transaksi WHERE id_transaksi = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'menghapus data  data',res)

    })
}

export const updatetransaksi =(req,res)=>{
    const {id_petugas,id_buku,id_anggota,tanggal_peminjaman,tanggal_pengembalian}=req.body
    const sql=`UPDATE transaksi SET id_petugas = "${id_petugas}",id_buku = "${id_buku}", id_anggota = "${id_anggota}", tanggal_peminjaman = "${tanggal_peminjaman}",tanggal_pengembalian = "${tanggal_pengembalian}" WHERE id_transaksi = ${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        response(200,result,'mengupdate data  data',res)

    })
}