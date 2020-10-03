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

* We can also create a global mixin with: `Vue.mixin({})` but it's not recommended to use it.
* Every mixin component is independant from the other, which means if we change a value on one component, it will not affect other components. If we want to do it, we can use the event bus to achieve or create a global variable (not as a mixin) in a different js file and import it for every component.

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

#### Communication with provide and inject
When we have a complex arborescence of components, passing data might be complex. We can provide data from parent to the farest child using `provide` and `inject`.

* In parent side, we have to create a method named `provid()` and this method will return the data that we want to send to the childs.
* From children side, now to get the data, we need to use a property named `inject`. It's an array that contain the name of the data provided by the parent.

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

## Sending HTTP requests
Important note about sending requests with Vue: When we submit a form, it automatically sends a request to the local server. To prevent that, we add on the form tag `prevent` keyword to the `submit` event: `<form @submit.prevent="method_to_execute">`.

For sending HTTP requests:
* We can use a third party packages (Most popular is **AXIOS**).
* We can use built-in functions of the browser with method `fetch()`.

### Sending POST requests
To send POST request with `fetch`, we have to specify: The URL, the Header (Content-Type) and the body (which contains the data).

``` 
fetch(URL, {
  method: "POST",
  headers: {
    'Content-Type': "application/json"
  },
  body: (data in JSON)
}) 
```

### Sending GET requests
For sending a GET request, we use also `fetch` method and specify: The URL. It returns a Promise with `response` object. We can check whether we have data on our response using `response.ok` and then access data returned as JSON with `response.json()`. This will also return a Promise with `data` parameter.
*We can use `function(response)` but while using it, we can not access to the context and using data from `data` object.*

```
fetch(URL).then(response => {
  if(response.ok) {
    return response.json()
  }
}).then(data => {})
```

#### Showing data when the component is loaded
We override method `mounted()` and call our method that fetches the data inside. 

## Animations & Transitions

To animate an element, we have wrap ip inside of a `<transition></transition>` tag. Important thing, we **MUST** ONLY show ONE element at a time.

Animations depends on a condition or v-show (for toggling it). It has 4 states:

![Transition states](https://raw.githubusercontent.com/SalimSalimi/VueJsCourse/master/Images/transitions-css.png)

We should '*' indicate the `name` attribut on the `<transition>` (`<transition name="name">) which will be used for every state. Then, by using the conditions to show or no, Vue will know when to toggle the CSS classes.

While mixing both transitions and animations, we can have a problem of synchronisation. For example, an animation that moves a component and transition that fade it. The animation can finish before the transition (or the opposite) and would have an expected behavior. To avoid this problem of synchronisation, we can specify to end all by using `type` attribut on `<transition>` tag. This will tell which type to follow and to end up. 

Example: `<transition name="name" type"animation">`: This will tell to end all whenever the animation would end.

* To start an animation or transition when the page is load, we can add a key to the `<transition>` tag which is : `appear`. This will start the animation when the page is loaded. `<transition name="name" appear>`.

#### Changing Default Class Name
We can rename CSS class that are attributed by default (for example**-enter-active*) by assigning the value of the class directly in to the `<transition>` by: `<transition enter-active-class="css classname">`.

#### Dynamic Names & Attributes
We can specify dynamically an attribute name by binding it `:name="variable` instead of `name="name"`. Works also for default class names.

#### Transition & Animation with 2 elements in the same transation
We can declare two elements inside of `<transition>` tag but we can only show one at a time. But on this case, we MUST not use `v-show` and we use only `v-if` or `v-if` & `v-else`.
The animation can be messy dependant on your case because VueJS doesn't know that those elements are two differents. To differentiate them, we add attribut `key` for every element inside of transition (like a unique ID).

##### Transition Mode
Transition mode sets how the animation or transition order of the elements should be set. There are two modes:

* **out-in**: The element that is going out is first executed then the element that is coming it will be shown.
* **in-out**: The element in will be show first then the element out will be hidden.

### Transition & Animations with Javascript

#### Transition JS Hooks
As we saw before, there is a kind of hooks for CSS classes while using transition. There is a similar concept for Javascript as shown below:

![Transition JS Hooks](https://raw.githubusercontent.com/SalimSalimi/VueJsCourse/master/Images/transitions-js-hooks.png)

#### Using the Hooks
To use one of the hooks with Javascript, we have to bind event hooks to a JS method on the `<transition>` tag like this: `<transition @beforeEnter="method">`.

Every method receives `element` as an argument which represents the element itself. Also, the two methods `enter` and `leave` receive a function `done()` that we must call to continue the execution of the animation (It's can be usefull if we do for example some Asynchronous job). Although, if a CSS class was hooked to the animation, this method will be called automatically.

* We can tell to Vue to not skip or to not check for a CSS class (Usefull especially when we are sure we will not use a CSS class) by using the attribut `css` and set it to `false`: `<template :css="false">`.

* For JS animations, we mostly use `enter` or `leave` functions to achieve it.

### Animating a Component
As a normal div, it works exactly the same. A simple trick to switch between components is to use the `is` attribute on `<component>` tag: `<component :is="name-of-component>"` 

### Animating A List
For animating a list, instead of using `<transition>`, we use `<transition-list>`. It works exactly the same as `<transition>`. Therefore, the small difference is we must bind `key` attribut to distinguish every element and make them unique. Also, it adds a new hook for the components called `*-move`. This hook is attached for every element of the list whenever we add/delete them. 

* Difference between `<transition>` and `<transition-list>` is that `<transition>` is not rendered to the DOM. `<transition-list>` is rendered as `<span>` by default but we can change it by using attribute `tag`: 
`<transition-list tag="TAG">`.

# Single Page Application
A single page application is a web app that contains only one html page (index.html) while other pages are being shown and rendered using Javascript.

Benefits of using this kind of development is making the server less prone to be called everytime a user navigate through out the app. Thus, it can create an issue. The issue is that link will be the same for all of the web app. For example: A user is in the login page and can navigate to an another page. The link for the pages will be the same and the user can not share the link of the other page directly. This problem has a solution, and it's called **Routing**.

## Routing
Routing is a way to create "multiple-page like" by using multiple SP. To use it with Vue, we have to install package: `vue-router@next` with npm.

### How to use vue-router
First, we have to import `createRouter` from `vue-router` package on `main.js`. We instanciate it and create a new JSON object that has as property:

* **routes**: An array of all routes for our app, we have to specify:
  * **Path**: Represents the path that will be used for loading the component.
  * **Component**: Represents the components which will be loaded.
  * **Name**: Represents an optional name that we can refer to them after.
* **history**: This property is important, it tells to JavaScript how to handle history in case a user want to return back for example. For using it, we have to import `createWebHistory` from `vue-router` then assign to the property `createWebHistory`. This will tell to JS to handle history like the browser would do it. 

After registering our routes, we must tell to `app` to use our router with: `app.use(route`).

Then, in our Vue file, Vue will create a new component called `router-view`. This will tell where to display our components according to the link.

### Using router-link
`router-link` is a way for creating redirection and navigate between components without reloading all the page (Avoiding data loss for example). This component is shipped with `vue-router`. It useful with navigation components for example.

This component is originaly just an `<a>` tag.
To use it:
* We have to use `router-link` component and specify where it should redirect using `to`: `<router-link to="/route">Name of the route<router-link>`. 

#### Styling router-link
While using router-link tag (which is an `<a>` tag). It provides us two CSS classes:

* **router-link-active**: It applies whenever we click the component, also it applies all to the subpath. Example: with `/teams` routes, it will also applies for `/teams/new`.
* **router-link-exact-active**: It applies whenever we click the component, difference it applies only for the current active path. Example: with `/teams` it will not apply for subpath like `/teams/new`.

We can also rename those classes in the `router` configuration with: `linkActiveClass`/`linkActiveExactClass` and give a string name.

### Navigate programatically
To navigate using code, we can access to the `router` object using `this` with: `this.$router`. Then we use the method `push(/routeName)` to redirect to the *routeName*: `this.$router('/routeName')`. 

### Dynamic route parameters
To pass a parameter for a route, we have to registered and give a name to the parameter like: `routeName/:param1`.

**IMPORTANT**: Always register static routes before dynamic ones.

To get a parameter, we have to use `route` like this: `this.$route.params.param1`.

### Dynamic navigating with parameters
To navigate accordingly a parameter, instead of using `to` with `router-link`, we will bind it to interpret it in JS: `:to="'routeName/' + param1"` *(equivalent to v-bind:to..)*. Or we can call a function that returns the value etc.

### Updating parameters with watchers
Because JS is caching the pages so is not rebuilding everytime, it can create an issue. For example, we are on the page `/teams/t1`, we provide a link to go to `t2`. Because of this behavior, it will not rebuild the page for `t2` (because it doesn't execute `created()` method lifecycle). So to make it work, we have to "watch" the `$route` property by creating a new `watch` property.
Example: 
```
watch: {
  $route(newRoute) {
    doSomething()
  }
}
```

### Sending data using props
Sometimes, using components and relying on `$route` adresses some issues and make it not reusable. To fix this, we can send data using `props`. But by default, when we use route, it doesn't pass propos between components, to change it, we have to set `props:true` on the configuration of the route.

### Redirections
Using Router, there is 2 ways of redirecting while configuring the router and routes:

* **redirect**: This property is added whenever we match the selected route and redirects to the value of `redirect` property. Example: `{ path: "/", redirect:"/route"}`. Whenever the user goes to `/`. He gets redirected to `/route`.
* **alias**: This property creates an alias for where its set. Example: `{path:"/route", alias:"/routeA"}`. If the user goes to `routeA`, he will get redirected to `route`.

* The difference between them is that redirect changes the URL, alias doesn't.

### Catching unmatched routes
When a user type a URL that doesn't exist in our app, it's better to redirect him on an Error page (or whatever). To catch all the routes, we need to defined a special route in our router, the path that we would specify would look like this: `/:notFound(.*)`. `notFound` is up to us to give it a name. `(.*)` is a regular expression. Then we can redirect or show a component like a normal route. 

### Nested routes
Nested routes is useful when it comes to create complex views and load multiple components which are connected together a based on different components and URLs. For example, in our case, loading the team members on the same page of team lists. This can be done by using nested routes. To use it, we have to add the array property `children` for the parent path. Example
```
  {path:"/teams", component..., children: [{
    path:"/:teamId", component:..}]
  }}
```
Now, the `/:teamId` root will be `/teams`, not `/` anymore. So to load components of the children, we have to add `<router-view>` tag on the parent view.

### Loading using name and objects
In bigger applications, we can have dozens of multiple routes and this can be really problematic when it comes to handling routes path. Especially when we have to change the path for a route, we have to update it everywhere on the app. We can get away from this inconvenience by using `name` property on the route. Instead of using `path` to get redirected, we will use the `name` property.

* For routes that uses params, we have to create a new object that will be binded to `:to` of `<router-link>`. This object will have two properties: `name`: represents the of the component. `params`: represents parameters of the route.

### Attach query params
To attach a query params to send to a route, we only add a property `query` on the object that we are using on `router-link` by binding it on `:to`:
```
query: {
  param1: value
}
```

### Rendering multiple routes with named router views
We can render multiple view using multiple route on the same view by defining multiple `<router-view>`. To distinct between `<router-view>`, we can give it a name by using `name` property: `<router-view name="footer">`. In our router configuration, where we define the routes and the components, we can define the property `components` (instead of component). This will be an object where we define the `name` property and the component that we want to show on that name. Example:
```
{path:.., components: {
  compo1: ComponentVue
  default: DefaultVue
}}
```
Then in our Vue, we use `<router-view name="compo1">` to show `ComponentVue`. We are allowed to not assign a name value for only one `<router-view>`. Its name is `default`.

To get the query parameter, we access it using `this.$route.query`.

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
