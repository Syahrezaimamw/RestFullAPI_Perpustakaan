export const response =(status,data,message,res)=>{
    res.status(status).json({
        datas:data,
        message,
    })
}