create database crud_node1;

use crud_node1;

create table personas(
    id INT NOT NULL auto_increment,
    nombre varchar(50) NOT NULL,
    direccion varchar(150),
    telefono varchar(10),
    primary key(id)
)

select * from personas;

insert into personas(nombre,direccion,telefono) values ('LB','Direccio de LB', '6675029622')