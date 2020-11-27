<template>
  <div>
      <label :for="id">{{label}}</label>
      <input 
      :id="id" 
      :type="type" 
      class="form-control" 
      :placeholder="placeholder" 
      :maxlength="maxlenght" 
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
    name: 'Input',
    props:{
        label:{
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: 'text'
        },
        placeholder:{
            type:String,
            default: 'Ingrese aqui un texto'
        },
        id:{
            type:String
        },
        maxlenght:{
            type:[String,Number],
            default:100
        }
    }
}
</script>

<style>

</style>