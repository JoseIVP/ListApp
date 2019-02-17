<template>
    <li>
        <span>{{element.text}}</span>
        <button type="button" @click="$emit('del-element')" >Eliminar</button>
    </li>
</template>

<script>
export default {
  name: 'ListElement',
  props: {
    element: Object
  }
}
</script>

<style scoped>

</style>
