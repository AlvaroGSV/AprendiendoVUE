const mysql = require('mysql');

const objectConnection = {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "246824",
    "database": "crud_node1"
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) => {
    if(error){
        console.log("ha ocurrido un error", error);
    }else{
        console.log("base de datos conectada");
    }
})

module.exports = myConn;