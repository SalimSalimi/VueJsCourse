<template>
  <div class="alert alert-success text-center">
    <h1>This is correct!</h1>
    <hr>
    <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
  </div>
</template>

<script>
export default {
  name: "Answer",
  methods: {
    onNextQuestion() {
      this.$emit("confirmed");
    }
  }
}
</script>

<style scoped>

</style>