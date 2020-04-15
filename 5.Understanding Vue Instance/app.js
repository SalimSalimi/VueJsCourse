let vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = "Changed with ref";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount("#app1");
vm1.$refs.myButton.innerText = "Changed outside Vue with ref"

setTimeout(function(){
  vm1.title = "Changed from timeout";
}, 3000);

let vm2 = new Vue({
  el: "#app2",
  data: {
    title: "Second title"
  },
  methods: {
    onChange: function(){
      vm1.title = "Changed from VM2";
    }
  }
})

