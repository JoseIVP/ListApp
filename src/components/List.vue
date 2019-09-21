<template>
  <b-list-group>
    <ListElement v-for="element in list" :key="element.id" :element="element"
    @del-element="$emit('del-element', element.id)"/>
  </b-list-group>
</template>

<script>
import ListElement from './ListElement.vue'

export default {
  name: 'List',
  components: {
    ListElement
  },
  props: {
    list: Array // Array of elements
  }
}
</script>

<style scoped>

</style>
