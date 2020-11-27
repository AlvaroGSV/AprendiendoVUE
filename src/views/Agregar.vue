<template>
  <div>
      <h1>AGREGAR PERSONAS</h1>
      <b-form @submit.prevent="savePersonas">
          <Input 
            v-model="persona.nombre" 
            label="Nombre" 
            placeholder="Ingrese el nombre de la persona" 
            id="nombre" 
            />
            <Input 
                v-model="persona.direccion" 
                label="Direccion" 
                placeholder="Ingrse su direccion" 
                id="direccion"
            />
            <Input 
                v-model="persona.telefono" 
                label="Telefono" 
                placeholder="INGRESE SU TELEFONO A 10 DIGITOS" 
                id="telefono"
            />
            <b-button to="/" pill variant="danger" class="m-3 float-left">INICIO</b-button>
            <b-button pill variant="dark" class="m-3 float-right" type="submit" >GUARDAR</b-button>
      </b-form>
      
  </div>
</template>

<script>
import Input from '../components/Input'
import{mapActions} from 'vuex'

export default {
    name: 'Agregar',
    components:{
        Input
    },
    data(){
        return{
            persona:{
                nombre: '',
                direccion: '',
                telefono: ''
            }
        }
    },
    methods:{
        ...mapActions(['savePersona']),
        savePersonas(){
            console.log(this.persona)
            this.savePersona({
                params: this.persona,
                onComplete: (response) => {
                    console.log(response)
                    this.$router.push({
                        name:'Home'
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>