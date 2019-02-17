<template>
    <form @submit.prevent="sendElement">
        <input v-model.trim="text" type="text" placeholder="Nuevo elemento">
        <button type="submit">Agregar</button>
    </form>
</template>

<script>
export default {
  name: 'AddElement',
  data(){
      return {
          text: ""
      }
  },
  methods:{
      sendElement(){
          this.$emit("add-element", this.text);
          this.text = "";
      }
  }
}
</script>

<style scoped>

</style>
