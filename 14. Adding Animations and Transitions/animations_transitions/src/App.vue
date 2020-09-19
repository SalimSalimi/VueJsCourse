<template>
  <div class="container">
    <div
      class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animations & Transitions</h1>
      <hr>
      <button class="btn btn-primary" @click="show = !show">Show Alert</button>
      <br><br>
      <transition name="fade">
        <div class="alert alert-info" v-if="show">This is some info</div>  
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
};
</script>

<style>
  .fade-enter {

  }

  .fade-enter-active {

  }

  .leave-enter {

  }

  .leave-enter-active {

  }
</style>
