const connection = require('../config/connections')

function getPersona(req, res){
    if(connection){
        let sql = 'Select * from personas';
        connection.query(sql, (err, personas) =>{
            if(err){
                res.send(err)                
            } else{
                console.log(personas)
                res.json(personas)
            }
        })
    }
}

//obtener persona por ID
function obtenerPer(req, res){
    if(connection){
        const {id} = req.params
        let sql = `select * from personas where id = ${connection.escape(id)}`
        connection.query(sql, (err, persona) => {
            if(err){
                res.send(err) 
            } else{
                let message = ""
                if(persona === undefined || persona.lenght === 0){
                    message = "PERSONA NO ENCONTRADA"
                }
                /*console.log(persona)*/
                res.json({data: persona, message: message})
            }
        })
    }
}
//agregar
function agregar(req,res){
    if(connection){
        const {datos} = req.body
        //VALIDACION PARA QUE NO ACEPTE NULOS
        if(!datos.nombre){
            return res.status(400).send({error:true, message:"EL NOMBRE ES OBLIGATORIO"})
        }
        let sql = `insert into personas set ?`
        connection.query(sql,[datos],(err, rows) =>{
            if(err){
                res.json(err)
            }else{
                res.json({error: false, data:rows, message:"Persona creada" })
            }
        })
    }
}

//editar
function editar(req,res){
    if(connection){
        const {id} = req.params
        const datos = req.body
        let sql = `update personas set ? where id = ?`
        connection.query(sql,[datos],[id], (err,rows) =>{
            if(err){
                res.json(err)
            }else{
                let message = ""
                if(rows.changedRows === 0){
                    message = "LA INFORMACION ES EXACTAMENTE IGUAL A LA DEL INICIO"
                }else{
                    message = "PERSONA CAMBIADA CON EXITO"
                }
                res.json({error: false, data:rows, message: message})
            }
        })
    }
}

//eliminar
function eliminar(req,res){
    if(connection){
        const {id} = req.params
        let sql = `delete from personas where id = ?`
        connection.query(sql,[id], (err,rows) => {
            if(err){
                res.json(err)
            }else{
                res.json({error: false, data:rows, message:"PERSONA ELIMINADA CON EXITO"})
            }
        })
    }
}

module.exports = {
    getPersona,
    obtenerPer,
    agregar,
    editar,
    eliminar
}