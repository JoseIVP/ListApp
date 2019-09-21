<template>
  <div id="app">
    <b-navbar id="navbar" type="dark" variant="primary">
      <b-navbar-brand>ListApp</b-navbar-brand> 
    </b-navbar>
    <div class="container px-0">
      <AddElement class="px-2 col-md-10 col-lg-8 mx-auto mt-4" @add-element="addElement"/>
      <List class="col-md-10 col-lg-8 mx-auto mt-4 px-0" :list="list" @del-element="delElement"/>
    </div>
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

#navbar{
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
}
</style>
