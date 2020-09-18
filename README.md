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

### Creating Custom Directives
In some use-cases, it's usefull to create your own custom directives (Highliting text, animations etc.). 
 
* We declare them on the ```main.js``` for a global scope file. To declare them, we use the Vue instance with .directive property:

```Vue.directive(id: String, function)```
For configurating a custom directives, it's important to understand the 5 hooks (Kind of lifecycle):

* We can also declare them locally in `export default` with the key `directives` (As we do for components for example).

#### Directives Hooks 

[![Directives Hooks](https://i.postimg.cc/ydm9NVyt/Screenshot-from-2020-09-17-16-08-16.png)](https://postimg.cc/dk0DHcXj)

We use mostly `bind` and `update` hooks.

* We access the DOM element with the variable `el` and from that, we can apply styling etc.
* We can it make it more dynamic by passing a value instead of statically, to do so:
We can access the value sent from binding: `binding.value` and then, we use the directive like this: `v-directive="value"`. For multiple values, we can create like a JSON Object and access them with their keys: `v-directive="key1: value, key2: value"`. Then, in the code: `binding.value.key1`.

* To use **arguments** (v-directive:argument): We can access the arguments sent with `binding` variable with the property `arg`: `binding.arg == argument`.
* To use **Modifiers** (v-directive:argument.modifier): We access them from `binding` with property `modifiers` which is an array object. Example: `binding.modifiers['modifier']`. And we can chain modifiers one behind an another.

## Filters & Mixins

### Filters
Filters are a way to transform output in to the template (`ONLY THE OUTPUT NOT DATA ITSELF`). VueJs doesn't ship with built-in Filters, we have to create all of them.

One use case for filters is to make a string to show as uppercase.

#### Declaring Filters
There are two ways to declare filters: *Globally* or *Locally*

* **Globally**: To declare a global filter, we have to add it in `main.js`. Then, using Vue object, we use the property `filter`. First parameter represents the name of the filter, second is a callback function that you MUST pass value as a parameter.

Example: ``Vue.filter('filter-name', function(value){})`

* **Locally**: To declare a local filter, in the `export default` on a Vue component, we declare a new filter in the `filters` property.

Example: ``` filters: { 
  filterName(value) {
    //Code
  }
}```

* We can chain filters one behind an another, the filter takes the result of what's behind it as an input.

* Sometimes, it's better to use a computed property instead of a filter for performance wise. Because while using filters, VueJs is always recreating the DOM and it can lead to performance issues. Instead, we should use **computed** properties, because they are calculated whenever there is an update to the computed property. Example: Filtering an array according to the user input.

### Mixins
When we have a shared properties with some components, we can declare a mixin in a js file and export. Then we import like a normal component. To use it, we should declare it in `mixins` property of a component which is an array. Example: `import { mixin } from './mixin.js` then in property: 
`mixins: ['mixin']`.

## Properties

- **el**: The id of the HTML element that we want to connect our Vue object
- **data**: Holds the data
- **methods**: Declares all our methods that we can use from our Vue object
- **computed**: Declares methods that are called when it's necessary. It accepts only Synchronous code
- **watch**: Like observer, watches the changes of a data and call a function that we declare on watch block. Can call asynchronous code
- **directives**: Declaring a new custom directive in a local scope 
- **filters**: To add a new filter for local scope.
- **mixins**: When we declare shared properties between components, we import it in mixins property which is ana array.
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
### Communication from child to parent

#### Using Custom events

To trigger an event from the child to the parent, we have to use the `this.$emit()` method provided by VueJS. The method takes arguments: Name of the method which will be executed on the parent component, the rest is the data that will be sent. Example: `this.$emit('eventName', data);`

On the parent side, we would trigger an event with "v-on or @" with the name that we specified on the child and access data with *$event* object. Example: `<component-child-name @eventName = "data = $event"></component-child-name>`..

#### Using callback

We can pass a callback function from the parent to the child. To do so, we have to declare a function (obviously) on the parent side, pass it like a normal property as we did for the data then pass the reference to the function. Example: `<component-child-name :callback="functionName"></component-child-name>`.

On the child side, we get the callback on the VueJs Instance and specify type as "Function". Then we can call it on the child as a normal method.

### Unidirectional Data Flow

Childs on the same level can not communicate each other, to make them communicate, we should always pass to the parent first and the parent serve the child. This is called unidirectional data flow.

#### Communication between childs components

We can communicate between childs by using 2 methods described before (callbacks or event). But this approach is not very suitable when we have a complex childs arborescence. To avoid that, we have **Bus communication**.

##### Bus communication Logic

The logic is to create a new Vue Instance before the main one that will be exported. This Vue Instace will hold events and be like a middleware for all the child. This done by emitting an event from one child with that new Vue Instance. Then, on the other child, on its instance, we should register the event in "created() [It's a Lifecycle method that's called on the creation of the Vue Instance]". On that block, we use that Vue Instance middleware and register the event with `middleware.$on('eventName', (data) => {});`.

* Therefore, in this approach and this project, it's a good practice to use it. But, on complex projects, we can have some state management problems that will be dealed with **Vuex**.

* We can also centralize data or methods by usings Bus communication, on the Vue Instance Bus, we can register a method that will emit an event. This method will be called by one of the child, then others will listen to the events and act accordingly. 

#### Passing data with slots

In order to send some html code from parent to child, we should use **slots**. In order to achieve, we pass the html code between the children tag. Example:

```
<children-tag-component>
  <h1>Slots</h1>
  <p>This HTML code will be displayed in child component!</p>
<children-tag-component>
```

Then, in the child site, on the template tag, we just add the *slots*: `<slot> </slot>` and that's it.

##### Using differents slots

We can pass differents slots at the same time by giving them a name. To achieve this:
* On the child side, on the slot tag, we add an attribute `name` and give it a name: `<slot name="slotName"></slot>`
* On the parent side, on the tag that we want to pass, we add an attribute `slot` ang give it a name:
`<h2 slot='slotName'></slot>`

##### Default slots

* If we don't assign a name to a slot (for both parent and child side), it will render the content on that slot.
* We can also define a default value (or slot) if we don't receive the slot from the parent by adding the content between `slot` tag on the child side.

### Dynamic Components

In order to switch between multiple components dynamically:

* We can declare a variable on the parent components in data field and assign a default value of a component name: `selectedComponent=componentName`.
* In `template` tag, we add `component` tag and bind the variable name on `is` attribute: `<component :is="selectedComponent></component>` 

* Assign new values to `selectedComponent` by using buttons for example.

By default, while switching between components, they are destroyed and recreated completly. To avoid that:

* We can wrap the `component` tag in a new tag `keep-alive`: `<keep-alive> <component :is=".."></component></keep-alive>`. While doing that, the `Destroyed` lifecycle method is no longer called.

* If we want to react to an event while switching components, we use 2 lifecycle hooks: `deactivated` and `activated`.

## Forms Handling

For Handling Input forms, we case use **Two-Way Databinding** by using **v-model** on the inputs. 
This will make change the value instantly after every key entering, we can use some modifiers to modify the behaviour:

### Modifiers

We can use some modifiers according to our needs, to use them, we have to add the modifier after *v-model*: *v-model.modifier*. 

* **lazy**: This modifier updates the data after the input is no longer focused.
* **number**: This modifier convert the input from string to number directly.
* **trim**: Deletes whitespace in the beginning and at the end of the input.

*We can chain the modifiers one by one: **lazy.number***

#### Textarea binding and line spacing
To prepopulate a Textarea, we can not use *{{ value }}* in the Textarea as we normally do to print text. Instead, we use *v-model* and give it a default value to do it.

To print some text in multi-line, by default, it ignores the whitespace. To make it show that space, we add a css *style* for the tag where we want to show it. Therefore, it's not an issue with Vue but instead it's with HTML, the multiline text is well formated when it's saved. Example: 

``` <p style="white-space: pre">{{ text }}<p> ```

#### Saving Checkboxes value
To save checkboxes value, we can use an array to save it. For that, we declare an empty array and bind it on the input with *v-model*: 

``` <input type="checkbox" value="lol" v-model="array"> ```

Vue will add the value inside of the array.

#### RadioButtons handling
To handle radiobuttons, it's easy. We declare a variable and assign it to the radiobutton input *v-model* attribut. This will store the value of the radiobutton, and prevent to have multiple choices.

#### Select handling 
In order to populate our select, we declare an array of the values and we loop with *for loop* on *<option>* tag.

To get the value, we bind a variable on the *<select>* tag using *v-model*. With that, we can access the data and even put a default value to show it first on the *select*. We can also put default value on the *<option>* tag by using *:selected="condition"*, but if we assign a default value for the varible that holds *<select>* it will overwrite it.

``` <option v-for='loop' :selected="condition"> ```

#### How v-model works
Behind the scenes, when we bind a variable using v-model on an input, it does 2 things, example:

``` <input type="text" v-model="var"> ``` this is equivalent to: ``` <input type="texte" :value="var" @input="var = $event.target.value"> ```

#### Submitting a form
When only one button is present in a form, it's automatically considered as "Submit" button.
To handle submit, we simply add `@click` event on the button and by default it's submitted to the server. To prevent that, we add `prevent` option to the event: `@click.prevent="methodName"`.

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
