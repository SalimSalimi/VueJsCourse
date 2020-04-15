# VueJsCourse
VueJs Course with Router and Vuex

## VueJs Concepts

Basically, to interact with HTML elements with VueJS, we have to create an instance of Vue like this:\
    ```new Vue({
        el: '#id'
        data: {
            data : 'value'
        }
    })\```
* el: It represents the element that we want to take control, it uses CSS Selectors.
* data: It holds all the data that we want to add to our element "id".\

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

### Multiple instances
In VueJS, it's perfectly fine to have multipe Vue instances. You can one page into multiple components. However, it's not recommended if one of the components would call a method from another Vue instance. 

### Access VueJs Instance data from another one
We can access data, methods and computed properties from another instance or just on JavaScript code by using a variable that we assigned to the VueJs Instance. Example: ```vm1 = new Vue.. vm1.title = "changed"```. \
**IMPORTANT:** We can not create new properties dynamically, only properties created with the instance are considered as a property.


## Binding Data
Basically, to show any data with VueJs on HTML, we have to use ``{{ data }}`` to do so. But, to bind data into an HTML element attribute (like href on a). We can not use like : `` <a href="{{link}}">. It will consider like a normal string. Instead of this, VueJs provides a directive called v:bind. To achieve this, we have to do so and without {{}}:\
    ``<a v-bind:href="data">``

## Directives
* *v-on*: It listens to any sort of DOM events, _*can be replaced with @*_
* *v-bind*: Bind data or methods on HTML attributes (like href) _*we can use :href without v-bind*_
* *v-once*: It forces an element to be rendered only once. Example:
    if we render a value on h1 element and this value would change after, It will automaticly update
    to the new value. So, to avoid this, we have to use v-once to take just only the first value.
* *v-html*: By default, we can not render HTML code directly, we have to use this directive to do it:
    v-html="htmlcode"
* *v-model*: A directive to use Two-Way Data Binding.
* *v-if*: Conditional rendering, if the condition is true, it will trigger the HTML element. Otherwise, it will delete it (not hide it).
* *v-else*: It's else statement of v-if.
* *v-show*: It likes v-if, the difference that v-show hides the element without removing it from the DOM.
* *v-for*: It's a for loop that creates the element in which we attached it according an array. (More detail on Lists section)

## Properties
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

# Condition Rendering and Lists
## Condition rendering
### v-if and v-else
We can use conditions to show or hide HTML element using `v-if`. For example on p HTML:
    ```<p v-if="true"> ``` It will show the element. Otherwise, it will delete it.\

We can also use `v-else` to do a else statement. The between parenthesis *MUST BE* an expression that can be evaluate into boolean (true or false). \

To make a block with a condition, it's better to use *template* HTML element (we can use div but sometimes we don't want to create a div, instead we use template). We can wrap up all the HTML elements that we want to show/hide with a condition on a template tag:
     ```<template> 
        <p> text </p>
        <template>```
### v-show
This directive is used to hide and show elements just like v-if, the difference is that it only hides the element, it doesn't remove it from the DOM.

## Lists
### Loop through arrays
We can create lists according to arrays with a `v-for` loop. To do so, we have to attach on `ul` for example like this: 
    `<ul>
        <li v-for="element in array">{{ element }}</li>
    </ul>` \

To acces the index of an element, we have to use 2 variables like `v-for= (element, i) in array`. *THE ORDER IS IMPORTANT, THE FIRST IS ALWAYS THE OBJECT ON THE ARRAY, SECOND ONE IS THE INDEX*. \
We can use it also with template like `v-if`.

### Loop through objects
To loop through objects and extract their (key, value) pairs et index. We can loop through the object and use it like this : `v-for="(value, key, index) in object`. *The order is also important but we can name as we want*

### Keep Track of array elements
When an element is added on array or updated on VueJs, it only keeps track of the position of that element, not the element itself. To force VueJs to keep track it, we can add bind a key using `v-bind:key or ':key'` and tells what we should store. 

# Side notes
* *```<template>```*: HTML tag that is not rendered on HTML code of the page, but it used like (div) but it doesn't create a division actually, we use it for example in conditions and loops.
