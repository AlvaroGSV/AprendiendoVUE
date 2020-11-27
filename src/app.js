const express = require('express')
const cors = require('cors')

//Iniciar express
const app = express()
app.use(cors())

//Configuraciones
app.set('port', process.env.PORT || 3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//base de datos
require('./config/connections')

//Ruta
app.use(require('./router/PersonasRoute'))

//Levantar el servidor
app.listen(app.get('port'), (error)=> {
    if(error){
        console.log('Ha ocurrido un error: ',error)
    }else{
        console.log('Servidor en puerto: ', app.get('port'))
    }
})
//para levantar el puerto en localhost se pone en terminal 'node src/app.js'

