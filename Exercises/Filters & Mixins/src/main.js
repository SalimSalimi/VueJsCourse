import Vue from "vue";
import App from "./App.vue";

Vue.filter('counting', function(value) {
  return value.concat(" (" + value.length + ")");
})

new Vue({
  el: "#app",
  render: h => h(App)
});
