<template>
    <b-form inline @submit.prevent="sendElement">
        <b-input class="col border-primary" v-model.trim="text" type="text" placeholder="Nuevo elemento"></b-input>
        <b-button class="ml-2" variant="primary" type="submit">Agregar</b-button>
    </b-form>
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
