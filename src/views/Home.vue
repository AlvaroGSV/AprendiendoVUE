<template>
  <div class="home">
    <h1>PERSONAS</h1>
    <p>Aqui se mostrara una vista de las personas en la base de datos</p>
    <Table :items="items" />
  </div>
</template>

<script>
import Table from '../components/Table'


export default {
  name: 'Home',
  components: {
    Table
  },
  data(){
    return{
      campos:[
        {key: 'id',label: 'Clave'},
        {key: 'nombre',label: 'Nombre'},
        {key: 'direccion',label: 'Direccion'},
        {key: 'tel',label: 'Telefono'}
      ]
    }
  },
}
</script>
