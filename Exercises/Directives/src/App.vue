<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Like v-on</h1>
      <button v-customOn:click="onclicked" class="btn btn-rimary">Click Me!!</button>
      <hr>
      <div 
        v-customOn:mouseover="mouseOver" v-customOn:mouseleave="mouseLeave"
        style="width:100px; height:100px; background-color:lightgreen">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        // el.onclick = () => {
        //   binding.value();
        // }
        const type = binding.arg;
        const func = binding.value;
        el.addEventListener(type, func);
      }
    }
  },
  methods: {
    onclicked(){
      alert("Button Clicked");
    },
    mouseOver() {
      console.log("Mouse over!");
    },
    mouseLeave() {
      console.log("Mouse left!");
    }
  }
};
</script>

<style></style>
