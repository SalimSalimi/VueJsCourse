<template>
  <div>
    <input type="texte" v-model="filterText">
      <ul>
        <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
      </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js';

export default {
  mixins: [fruitMixin]
};
</script>

<style></style>
