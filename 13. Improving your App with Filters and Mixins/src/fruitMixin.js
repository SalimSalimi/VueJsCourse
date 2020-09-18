export const fruitMixin = {
    data () {
        return {
          fruits:['Apple', 'Banana', 'Mango', 'Melon'],
          filterText: ''
        }
      },
      filters: {
        toUppercase(value){
          return value.toUpperCase();
        }
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
          })
        }
      }
}