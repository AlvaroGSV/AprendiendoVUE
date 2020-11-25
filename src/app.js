const express = require('express')

//Iniciar express
const app = express()

//Configuraciones
app.set('port', process.env.PORT || 3000)

//base de datos
require('./config/connections')

//Ruta
app.get('/', (req, res) => {
    console.log("mensaje de consola")
    res.json({mensaje: "hola"})
})

//Levantar el servidor
app.listen(app.get('port'), (error)=> {
    if(error){
        console.log('Ha ocurrido un error: ',error)
    }else{
        console.log('Servidor en puerto: ', app.get('port'))
    }
})
//para levantar el puerto en localhost se pone en terminal 'node src/app.js'

