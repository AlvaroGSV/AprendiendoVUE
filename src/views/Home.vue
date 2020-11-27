<template>
  <div class="home">
    <h1>PERSONAS</h1>
    <p>Aqui se mostrara una vista de las personas en la base de datos</p>
    <Table :fields="fields" :items="allPersonas"/>
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
        {key: 'telefono',label: 'Telefono'}
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
