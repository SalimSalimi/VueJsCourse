<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Filters & Mixins</h1>
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
      </ul>
      <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixin.js';

export default {
  mixins: [fruitMixin],
  data () {
    return {
      text: "Hello World!"
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>

<style></style>
