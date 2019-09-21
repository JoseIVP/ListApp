<template>
    <b-list-group-item class="d-flex pl-0">
        <span class="col text-ellip">{{element.text}}</span>
        <b-button size="sm" variant="danger" @click="$emit('del-element')" >Eliminar</b-button>
    </b-list-group-item>
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
.text-ellip{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media (max-width: 575.98px) {
  .list-group-item{
    border-radius: 0;
  }

  .list-group-item:first-child{
    border-top: 0;
  }

  .list-group-item:last-child{
    border-bottom: 0;
  }
}

</style>
