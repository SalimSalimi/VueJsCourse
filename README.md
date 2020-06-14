# VueJsCourse

VueJs Course with Router and Vuex

## VueJs Concepts

Basically, to interact with HTML elements with VueJS, we have to create an instance of Vue like this: \
 `new Vue({ el: '#id' data: { data : 'value' } })`

- el: It represents the element that we want to take control, it uses CSS Selectors.
- data: It holds all the data that we want to add to our element "id".

After that, we can wrap an element on HTML page like a div and show the data on the selected element: \
 `<div id="app"> <p>{{ title }}</p> </div>`

    ```<input type="text" v-on:input="changeTitle">``` \

We can add more functionnalities and event handling with VueJs, to do that we use features called "Directives", one of them is v:on. This directive is used to listen to events. In our case to input events:\
After that, VueJs element has a property called "methods" to add some methods to our VueJs instance. "This" refers to data object.\
 `methods : { changeTitle : function(event) { this.title = event.target.value; } }`

#### VueJs: How it works ?

VueJs uses templates to interact with HTML code. So, the Vue Instance creates a template and this template is after translated into HTML Code. This template is a connection between the Vue instance and HTML code.

### Multiple instances

In VueJS, it's perfectly fine to have multipe Vue instances. You can one page into multiple components. However, it's not recommended if one of the components would call a method from another Vue instance.

### Access VueJs Instance data from another one

We can access data, methods and computed properties from another instance or just on JavaScript code by using a variable that we assigned to the VueJs Instance. Example: `vm1 = new Vue.. vm1.title = "changed"`. \
**IMPORTANT:** We can not create new properties dynamically, only properties created with the instance are considered as a property.

### ref property

ref property is like a directive used to select HTML elements (instead of using vanilla JS with document.getElement). We give a name to the ref and access it everywhere using \$. Example: `this.$refs.buttonName.innerText = "text";`

### \$mount() method

Using mount method, we can append a child into the HTML element instead of using "el" property. `vueInstance.$mount("#id");`.

## VueJS Instance Lifecycle

![VueJS Instance](https://i.imgur.com/5hl3s7Q.png)

We can override the lifecycle methods of an instance like a property. Example:
`new Vue({ el: "#element", data { title: "lol" }, beforeCreate: function(){ console.log("before create"); } })`

## Binding Data

Basically, to show any data with VueJs on HTML, we have to use `{{ data }}` to do so. But, to bind data into an HTML element attribute (like href on a). We can not use like : `<a href="{{link}}">`. It will consider like a normal string. Instead of this, VueJs provides a directive called v:bind. To achieve this, we have to do so and without {{}}:
`<a v-bind:href="data">`

## Directives

- **v-on**: It listens to any sort of DOM events, **can be replaced with @**
- **v-bind**: Bind data or methods on HTML attributes (like href) **we can use :href without v-bind**
- **v-once**: It forces an element to be rendered only once. Example:
  if we render a value on h1 element and this value would change after, It will automaticly update
  to the new value. So, to avoid this, we have to use v-once to take just only the first value.
- **v-html**: By default, we can not render HTML code directly, we have to use this directive to do it:
  `v-html="htmlcode"`
- **v-model**: A directive to use Two-Way Data Binding.
- **v-if**: Conditional rendering, if the condition is true, it will trigger the HTML element. Otherwise, it will delete it (not hide it).
- **v-else**: It's else statement of v-if.
- **v-show**: It likes v-if, the difference that v-show hides the element without removing it from the DOM.
- **v-for**: It's a for loop that creates the element in which we attached it according an array. (More detail on Lists section)
- **ref**: Not really a directive, but it used to select HTML elements. (like query selector with Vanilla JS)

## Properties

- **el**: The id of the HTML element that we want to connect our Vue object
- **data**: Holds the data
- **methods**: Declares all our methods that we can use from our Vue object
- **computed**: Declares methods that are called when it's necessary. It accepts only Synchronous code
- **watch**: Like observer, watches the changes of a data and call a function that we declare on watch block. Can call asynchronous code

## Events

To handle events with VueJs, we have to use `v-on` directive. It uses the same DOM event like: v-on:click.\
The event object created by the DOM is directly passed to the methods that was called by the event, we just have to pass an argument to the function created like : `updateCoordinates: function(event)`.\
We can pass arguments to our functions when they called by simply adding () and then pass the argument. Exemple:\
 `increase(step, $event)`

- _\$event\_ object is a reserved so we **MUST NOT** override it, it is provided by the DOM. (It's optional to use it)_.

#### Event Modifiers

Event modifiers can modify how an event should be triggered. For example, (in our span), we can stop the mouseover event triggered by _p_ by simply adding `v-on.mousemove.stop` on the _span_.

_AVAILABLE EVENT MODIFIERS : [Event Modifiers](http://vuejs.org/v2/guide/events.html#Event-Modifiers)_

#### Key Event Modifiers

Key event modifiers are event triggered from key input from the user. To do so, we can use the example of an input, when a user tape space or enter, we will show an alert. The event that we should listen is: `v-on:keyup.enter.space`.

_AVAILABLE KEY MODIFIERS : [Key Modifiers](http://vuejs.org/v2/guide/events.html#Key-Modifiers)_

## Two-Way Data-Binding

We can implement Two-Way databinding by using the v-model directive. Example:\
 `<input type="text" v-model="name">`

## Computed Properties

It's properties that not calculated everytime an event is happening. For example: We have a method and computed, if the computed property doesn't have any related data meant to be change, it will not call it to recalculate it. For the method, everytime it's called. That's the difference betweeb both. They are used like data properties and not functions.\
To declare a computed property, just use the `computed` keyword and add a function.

## Watch Properties

Property that watch to a data value, it triggers the function that we declared on the watch block.

## Dyanamic styling CSS

We have 3 methods to dynamicly style HTML elements using CSS classes:

### Using classes

#### Basic conditionally

Creating a data property that holds a boolean value, this value would change for example on click event, to attach the class, we have to bind it with v-bind on class attribute like so: `v-bind:class={className: value}` or `:class={className: value}`

#### Using objects

We can create an object on computed property for example like this:
`computed: { classStyle: function(){ class1: true, class2: false } }`
then call computed property on :class directive

#### Using class name

We can attach directly a class by giving the class name on _:class_ directive. We can also put multiple classes using array like _[class1, class2]_ (Also adding objects like before).

### Using style directly

We can add new styles dynamicly by using `v-bind:style (or :style)` and give the style that we want to add like CSS code _(When we use a style property that has "-" we should make the style property between '' or make the first letter after '-' camelcase Example 'background-color' or 'backgroundColor')_. \
We also can use an array.

# Condition Rendering and Lists

## Condition rendering

### v-if and v-else

We can use conditions to show or hide HTML element using `v-if`. For example on p HTML:
`<p v-if="true">` It will show the element. Otherwise, it will delete it.

We can also use `v-else` to do a else statement. The between parenthesis _MUST BE_ an expression that can be evaluate into boolean (true or false).

To make a block with a condition, it's better to use _template_ HTML element (we can use div but sometimes we don't want to create a div, instead we use template). We can wrap up all the HTML elements that we want to show/hide with a condition on a template tag:
`<template> <p> text </p> <template>`

### v-show

This directive is used to hide and show elements just like v-if, the difference is that it only hides the element, it doesn't remove it from the DOM.

## Lists

### Loop through arrays

We can create lists according to arrays with a `v-for` loop. To do so, we have to attach on `ul` for example like this:
`<ul> <li v-for="element in array">{{ element }}</li> </ul>`

To acces the index of an element, we have to use 2 variables like `v-for= (element, i) in array`. **THE ORDER IS IMPORTANT, THE FIRST IS ALWAYS THE OBJECT ON THE ARRAY, SECOND ONE IS THE INDEX**. \
We can use it also with template like `v-if`.

### Loop through objects

To loop through objects and extract their (key, value) pairs et index. We can loop through the object and use it like this : `v-for="(value, key, index) in object`. **The order is also important but we can name as we want**.

### Keep Track of array elements

When an element is added on array or updated on VueJs, it only keeps track of the position of that element, not the element itself. To force VueJs to keep track it, we can add bind a key using `v-bind:key or ':key'` and tells what we should store.

## Components

VueJS allows us to create reusable components. This way, we can create like "templates" and use it on different webpages of our web app.
To do so, we have to declare a new Vue component like this:

```
   Vue.component("componentName", {
       template: "HTML code"
    })
```

To use it on our HTML page, we can just use `<componentName></componentName>`

### Components Characteristics

There are some differences between them:

- With components, we can reuse the component accross the page and each of them is different (In term of holding data)
- The data field on Component object is a function because It heritates from Vue and to avoid the interference between the two objects, It declared as a function. Also, It makes the data unique for every instance of the component. **NOTE**: If we want to share the same data, we can cheat by declaring a global object that holds the data. After that, we can return this object on data function.
- To use a Component locally, we can declare a variable that holds our component data then pass it to `components` property to our view instance.

```
new Vue({
  el: "#app",
  components: {
    'mycmp': component
  },
});
```

- When creating a new component on VueJS with Webpack, we have to wrap that component on a root view element (a div for example). So, the component must be on a template AND on a root component.

### Folder Structure for the Components

It's a good practice to separate the components on different subfolders. First, it's good to make "components" on the "components" folder. And inside, create other subfolders and organize them depending of utilisation.

### Components Naming

On VueJS, it's better to use the '-' naming convention because it's look like more HTMLish. For that, we have 2 options to name our components:

- _Classic One_: By simply giving a name like 'app-component-name'.
- _Auto Generated_: By using appComponentName, VueJS will create a component that we can access with:
  _app-component-name_ or with _appComponentName_.
- _Not Specifying A Component Name_: If we don't specify a component name and pass only the component, it will create a key value pair for us with the same name as the component.

** Example **:

```
components: {
    appHeader: Header, _Auto Generated_
    Servers, _Without Name_
    "app-server-details": ServerDetails,  _Classic_
    "app-footer": Footer _Classic_
```

### Components Styling

We can style our components directly on `<style>` tag present on vue file. If we apply a style, It will apply globally to all of the elements event if it's not the same components. To avoid this, we have to use `scoped` keyword to say to VueJs apply this style only on this current component. `<style scoped> styling <style>`

### Components Communication

#### From parent to child communication

To transfer data from parent to child, we use **props** on the Vue Instance. Props is a property that we should define on the child component. It's an array of Strings containing the name of the properties sent from the parent to the child. Then, it will create a variable data with the same name as the property and we can use it on the template.

In the parent side, to pass the data into the child component, we have to bind that data in the component directive. For example: `<child-component-name :data="data-name"></child-component-name>`. *If we don't bind (ommiting the ':' or 'v-bind') will make the data static*.

Now, on the child side, to get the data, we should do this: props: ['data'] on the Vue Instance.

Now, we access it as a normal property.

##### Validating Props

We can specify the type of props by spliting the props array into an object. The object would have then properties that is the same as the data name sent from the parent. After that, we have two ways of specifying the type:

* Directly using type
```
export default {
  props: {
    variable: type (to use multiple types, we can put it all the types in an array: [String, Array])
  }
}
```
* Using an object
```
export default {
  props: {
    variable {
      type: type,
      default: (default value),
      required: (if it's required to receive the data or not, boolean)
    }
  }
}
```

#### Custom events from child to parent

To trigger an event from the child to the parent, we have to use the `this.$emit()` method provided by VueJS. The method takes arguments: Name of the method which will be executed on the parent component, the rest is the data that will be sent. Example: `this.$emit('eventName', data);`

On the parent side, we would trigger an event with "v-on or @" with the name that we specified on the child and access data with *$event* object. Example: `<component-child-name @eventName = "data = $event"></component-child-name>`..

### Unidirectional communication

Childs on the same level can not communicate each other, to make them communicate, we should always pass to the parent first and the parent serve the child. This is called unidirectional data flow.

# Moving to real development workflow with Webpack and VueCLI

In real development, at least for medium and big sized projects, serving file staticly is not a good idea. We have to use some kind of server for our app.

## Development Server

It's a lightweight development server used with NodeJs, it will help for compiling our Vues and serve our HTML pages using HTTP protocol. It will compile all our templates in to JavaScript code from the server, not on the browser.

## Development Workflow

![Development Workflow](https://i.imgur.com/7MLT2WQ.png)

It allows us to shrink our project, making the app faster.

## Vue CLI

It's a set of tools that allows us to generate templates for our project, compile it and testing it.

![Vue CLI](https://i.imgur.com/Mhocdm9.png)

To get started, we have to install globally vue-cli using npm: `npm install -g @vue/cli`.

After that, we can init a new Vue project using a template with: `vue create "project-name"`.

- project-name: Name of the project.

To run the project, we have to enter to the folder of the project and run `npm run serve`.

After that, we can follow the commands shown on the command line: `npm install && npm run dev`.
We can access our project on (http://localhost:8080)

# Side notes

- _`<template>`_: HTML tag that is not rendered on HTML code of the page, but it used like (div) but it doesn't create a division actually, we use it for example in conditions and loops.
