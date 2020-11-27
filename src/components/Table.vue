<template>
  <div>
    <b-table 
        striped
        bordered
        hover 
        :items="items" 
        :fields="fields"
        >
        <template #cells(actions)="data">
          <slot name="actions" :item="data"></slot>
        </template>
    ></b-table>
  </div>
</template>

<script>
export default {
    name: 'Table',
    props:{
        items: Array,
        fields: Array
    }
}
</script>

<style>

</style>