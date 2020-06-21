<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="activatedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="activatedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="activatedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="activatedComponent">
                    {{ content }}
                </component>
                
                <!-- First question
                <app-blue>
                    <p>{{ content }}</p>
                </app-blue>        
                <app-green>
                    <p>{{ content }}</p>
                </app-green>
                <app-red>
                    <p>{{ content }}</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data : function() {
            return {
                content: "This is the content!",
                activatedComponent: "appBlue"
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
