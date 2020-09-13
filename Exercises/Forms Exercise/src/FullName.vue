<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        class="form-control"
        :value="firstName"
        @input="nameChanged(true, event)"
      />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        :value="lastName"
        @input="nameChanged(false, event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      let fullName = "";
      if (isFirst) {
        fullName = event.target.value + " " + this.lastName;
      } else {
        fullName = this.firstName + " " + event.target.value;
      }
      this.value = fullName;
      this.$emit("input", this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
