<template>
  <div id="app">
    <AddElement @add-element="addElement"/>
    <List :list="list" @del-element="delElement"/>
  </div>
</template>

<script>
import localforage from 'localforage';
import uuid from 'uuid';

import List from './components/List.vue';
import AddElement from './components/AddElement.vue';

export default {
  name: 'app',
  data(){
    return {
      list: [],
      db: null
    }
  },
  components: {
    List,
    AddElement
  },
  methods: {
    addElement(text){
      const elementToAdd = {id: uuid.v4(), text};
      this.db.setItem(elementToAdd.id, text).then(value => console.log(value));
      this.list.push(elementToAdd);
    },
    delElement(id){
      this.list = this.list.filter(element => element.id != id);
      this.db.removeItem(id).then(() => console.log("Element removed!"));
    }
  },
  created(){
    const db = localforage.createInstance({
      name: "list_database"
    });
    this.db = db;
    const vueApp = this;
    db.length().then(len => {
      if (len>0){
        db.iterate((value, key, iterationNumber) => {
          const listElement = {id: key, text: value};
          vueApp.list.push(listElement);
        });
      }
    });
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
