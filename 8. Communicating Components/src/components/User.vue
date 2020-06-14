<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name!</button>
        <p>{{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" 
                @nameWasReset="name = $event"
                :resetCallback="resetNameCallback"
                :userAge="age"></app-user-detail>
            </div
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import eventBus from '../main.js';

    export default {
        data: function (){
            return {
                name:"Salim",
                age: 27
            };
        },
        methods: {
            changeName() {
                this.name = "Salimi";
            },
            resetNameCallback() {
                this.name = "Salim";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
