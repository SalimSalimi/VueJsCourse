<template>
  <div class="container">
    <form>
      <div class="row">
        <div 
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>Built-in Directives</h1>
          <p v-text="'Some Text'"></p>
          <p v-html="'<strong>Some strong text</strong>'"></p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
