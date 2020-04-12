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
Basically, to show any data with VueJs on HTML, we have to use ``{{ data }}`` to do so. But, to bind data into an HTML element attribute (like href on a). We can not use like : `` <a href="{{link}}">. It will consider like a normal string. Instead of this, VueJs provides a directive called v:bind. To achieve this, we have to do so and without {{}}:\
    ``<a v-bind:href="data">``

## Directives
* *v-on*: It listens to any sort of DOM events, _*can be replaced with @*_
* *v-bind*: Bind data or methods on HTML attributes (like href) _*we can use :href without v-bind*_
* *v-once*: It forces an element to be rendered only once. Exemple:\
    if we render a value on h1 element and this value would change after, It will automaticly update
    to the new value. So, to avoid this, we have to use v-once to take just only the first value.
* *v-html*: By default, we can not render HTML code directly, we have to use this directive to do it:
    v-html="htmlcode"
* *v-model*: A directive to use Two-Way Data Binding.

## Propeties
* *el*: The id of the HTML element that we want to connect our Vue object
* *data*: Holds the data
* *methods*: Declares all our methods that we can use from our Vue object
* *computed*: Declares methods that are called when it's necessary. It accepts only Synchronous code
* *watch*: Like observer, watches the changes of a data and call a function that we declare on watch block. Can call asynchronous code

## Events
To handle events with VueJs, we have to use ```v-on``` directive. It uses the same DOM event like: v-on:click.\
The event object created by the DOM is directly passed to the methods that was called by the event, we just have to pass an argument to the function created like : ```updateCoordinates: function(event)```.\
We can pass arguments to our functions when they called by simply adding () and then pass the argument. Exemple:\
    ```increase(step, $event)```
*. *_$event_ object is a reserved so we _MUST NOT_ override it, it is provided by the DOM. (It's optional to use it)*.
#### Event Modifiers
Event modifiers can modify how an event should be triggered. For example, (in our span), we can stop the mouseover event triggered by _p_ by simply adding ```v-on.mousemove.stop``` on the _span_.\

*AVAILABLE EVENT MODIFIERS : [Event Modifiers] (http://vuejs.org/v2/guide/events.html#Event-Modifiers)*

#### Key Event Modifiers
Key event modifiers are event triggered from key input from the user. To do so, we can use the example of an input, when a user tape space or enter, we will show an alert. The event that we should listen is: ```v-on:keyup.enter.space```.\

*AVAILABLE KEY MODIFIERS : [Key Modifiers] (http://vuejs.org/v2/guide/events.html#Key-Modifiers)*

## Two-Way Data-Binding
We can implement Two-Way databinding by using the v-model directive. Example:\
  ```<input type="text" v-model="name">```

## Computed Properties
It's properties that not calculated everytime an event is happening. For example: We have a method and computed, if the computed property doesn't have any related data meant to be change, it will not call it to recalculate it. For the method, everytime it's called. That's the difference betweeb both. They are used like data properties and not functions.\
To declare a computed property, just use the ```computed``` keyword and add a function.

## Watch Properties
Property that watch to a data value, it triggers the function that we declared on the watch block.

## Dyanamic styling CSS
We have 3 methods to dynamicly style HTML elements using CSS classes:
### Using classes

#### Basic conditionally
Creating a data property that holds a boolean value, this value would change for example on click event, to attach the class, we have to bind it with v-bind on class attribute like so: `v-bind:class={className: value}` or `:class={className: value}` 

#### Using objects
We can create an object on computed property for example like this: 
    ```computed: {
        classStyle: function(){
            class1: true,
            class2: false
        }
    }```
then call computed property on :class directive

#### Using class name
We can attach directly a class by giving the class name on _:class_ directive. We can also put multiple classes using array like _[class1, class2]_ (Also adding objects like before).

### Using style directly
We can add new styles dynamicly by using `v-bind:style (or :style)` and give the style that we want to add like CSS code *(When we use a style property that has "-" we should make the style property between '' or make the first letter after '-' camelcase Example 'background-color' or 'backgroundColor')*. \
We also can use an array.