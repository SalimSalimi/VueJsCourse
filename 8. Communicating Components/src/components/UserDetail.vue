<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset the name</button>
        <button @click="resetCallback">Reset the name with callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: {
        myName: {
            type: String
        },
        resetCallback: Function,
        userAge: Number
    },
    methods: {
        reverseName() {
            return this.myName.split("").reverse().join("");
        },
        resetName(){
            this.myName = 'Salim';
            this.$emit('nameWasReset', this.myName)
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
