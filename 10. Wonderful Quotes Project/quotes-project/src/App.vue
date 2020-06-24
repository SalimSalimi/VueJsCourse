<template>
  <div class="container">
    <app-quotes-grid :quotes="quotes"></app-quotes-grid>
  </div>
</template>

<script>
  import QuotesGrid from './components/QuotesGrid.vue';

  export default {
    data: function() {
      return {
        quotes: [
          'A single Quote'
        ],
        maxQuotes: 10
      }
    },
    components: {
      appQuotesGrid: QuotesGrid
    }
  }
</script>

<style>

</style>
