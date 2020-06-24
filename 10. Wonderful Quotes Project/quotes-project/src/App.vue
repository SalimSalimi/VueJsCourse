<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quotes-grid :quotes="quotes"></app-quotes-grid>
  </div>
</template>

<script>
  import QuotesGrid from './components/QuotesGrid.vue';
  import NewQuote from './components/NewQuote.vue';

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
      appQuotesGrid: QuotesGrid,
      appNewQuote: NewQuote
    },
    methods: {
      newQuote(quote) {
        this.quotes.push(quote);
      }
    }
  }
</script>

<style>

</style>
