export const computedMixin = {
    computed: {
    invertTextComp() {
      return this.text.split("").reverse().join("");
    },
    countComputed() {
      return this.text.concat(" (" + this.text.length + ")");
    }
  }
};