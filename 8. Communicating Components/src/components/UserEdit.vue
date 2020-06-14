<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editUserAge">Edit User Age</button>
    </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
    props: ['userAge'],
    methods: {
        editUserAge() {
            this.userAge = 30;
            //this.$emit("ageEdited", this.userAge);
            eventBus.$emit("ageWasEdited", this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
