const sequelize= require('sequelize')

const conexion= new sequelize('iTickets','root','',{
    host: 'localhost' || "127.0.0.1",
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        arquire:30000,
        idle:10000
    },
    operatorAliases:false
})
module.exports=conexion