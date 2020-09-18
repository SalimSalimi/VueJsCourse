<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Filters & Mixins</h1>
      <!-- Build a local filter to invert text-->
      <!-- Build a global filter that counts letter of a word and appends it-->
      <!-- Doing same exercie 1 & 2 with computed properties-->
      <!-- Share computed properties using mixin -->
      <p>{{ text | invertText | counting}}</p>
      <p>{{ invertTextComp }}</p>
      <p>{{ countComputed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computedMixin } from './computedMixins.js';

export default {
  mixins: [computedMixin],
  data () {
    return {
      text: "Hello World!"
    }
  },
  filters: {
    invertText(value) {
      return value.split("").reverse().join("");
    }
  },
  /*computed: {
    invertTextComp() {
      return this.text.split("").reverse().join("");
    },
    countComputed() {
      return this.text.concat(" (" + this.text.length + ")");
    }
  }*/
};
</script>

<style></style>
