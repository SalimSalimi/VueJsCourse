<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <button @click="resetName">Reset the name</button>
        <button @click="resetCallback">Reset the name with callback</button>
    </div>
</template>

<script>
export default {
    props: {
        myName: {
            type: String
        },
        resetCallback: Function
    },
    methods: {
        reverseName() {
            return this.myName.split("").reverse().join("");
        },
        resetName(){
            this.myName = 'Salim';
            this.$emit('nameWasReset', this.myName)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
