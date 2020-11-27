<template>
  <div>
      <h1>AGREGAR PERSONAS</h1>
      <b-form @submit.prevent="onSubmit">
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
                :maxlength="10"
            />
            <b-button pill variant="warning" class="m-3 float-right" type="submit" >GUARDAR</b-button>
      </b-form>
      
  </div>
</template>

<script>
import Input from '../components/Input'

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
    }
}
</script>

<style>

</style>