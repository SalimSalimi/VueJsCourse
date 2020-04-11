# VueJsCourse
VueJs Course with Router and Vuex

## VueJs Concepts

Basically, to interact with HTML elements with VueJS, we have to create an instance of Vue like this:\
    new Vue({
        el: '#id'
        data: {
            data : 'value'
        }
    })\
*. el: It represents the element that we want to take control, it uses CSS Selectors.
*. data: It holds all the data that we want to add to our element "id".\

After that, we can wrap an element on HTML page like a div and show the data on the selected element:\
    ```<div id="app">
		<p>{{ title }}</p>
	</div>```\

We can add more functionnalities and event handling with VueJs, to do that we use features called "Directives", one of them is v:on. This directive is used to listen to events. In our case to input events:\
    ```<input type="text" v-on:input="changeTitle">```
After that, VueJs element has a property called "methods" to add some methods to our VueJs instance. "This" refers to data object.\
        ```methods : {
            changeTitle : function(event) {
            this.title = event.target.value;
            }
        }```

#### VueJs: How it works ?
VueJs uses templates to interact with HTML code. So, the Vue Instance creates a template and this template is after translated into HTML Code. This template is a connection between the Vue instance and HTML code.

## Binding Data
Basically, to show any data with VueJs on HTML, we have to use ``{{ data }}`` to do so. But, to bind data into an element attribute (like href on a). We can not use like : `` <a href="{{link}}">. It will consider like a normal string. Instead of this, VueJs provides a directive called v:bind. To achieve this, we have to do so and without {{}}:\
    ``<a v-bind:href="data">``