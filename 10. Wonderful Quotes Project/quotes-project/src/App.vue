<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quotes-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
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
      },
      deleteQuote(index){
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style>

</style>
