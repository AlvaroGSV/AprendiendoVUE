<template>
  <div class="home">
    <h1>PERSONAS</h1>
    <p>Aqui se mostrara una vista de las personas en la base de datos</p>
    <b-button to="/AddPerson" pill variant="primary" class="m-2 float-right">Nueva personas</b-button>
    <Table :fields="fields" :items="allPersonas">
      <template slot="actions" slot-scope="{item}">
        <b-button @click="onEditar(item)">editar</b-button>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '../components/Table'
import{mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    Table
  },
  data(){
    return{
      fields:[
        {key: 'id',label: 'Clave'},
        {key: 'nombre',label: 'Nombre'},
        {key: 'direccion',label: 'Direccion'},
        {key: 'telefono',label: 'Telefono'},
        {key: 'actons', label: 'Acciones'}
      ]
    }
  },
  computed:{
    ...mapGetters(['allPersonas'])
  },
  methods:{
    ...mapActions(['setPersonas'])
  },
  created(){
    this.setPersonas()
  }
}
</script>
