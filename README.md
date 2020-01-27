# Mataf
## Contact me
Kobi Hari
mail: hari@applicolors.com
and also - through `Whatsapp`

## Day 1 - Typescript and introduction to Angular
### Projects:
|     |     |
| --- | --- |
| [hello-javascript](https://github.com/kobi2294/Mataf/tree/master/Day%2001/hello-javascript) | Introduction to some javascript gotchas | 
| [hello-nodejs](https://github.com/kobi2294/Mataf/tree/master/Day%2001/hello-nodejs) | Introduction to working with node js |
| [hello-ts](https://github.com/kobi2294/Mataf/tree/master/Day%2001/hello-ts) | An introduction to typescript projects and tsconfig |
| [hello-angular](https://github.com/kobi2294/Mataf/tree/master/Day%2001/hello-angular) | A bare-bones angular application |


### Javascript types and gotchas
* We have Convered the 7 types of javascript: boolean, number, string, object, function, null and undefined
* We have seen how to use JSON to describe complex object values
* We have seen the true meaning of the `new` and `this` keywords, and most specifically - that they do not have the same meaning as in Java.
* We have experienced the problem of the missing `this` context

### Typescript introduction
* How to declare a type for a variable
* Declaring function return type
* Defining arrays
* Defining Tuples
* Using the `let` keyword
* Defining Classes
* Declaring constructors and initializing fields in the constructor signature
* private, public and protected fields
* Using interfaces
* Typescript definition for **Type Safety** as "signature compatible"
* Casting in typescript
* Union Types
* Cross Types
* the `type` alias

### How to use Node, Npm, and Tsc
* We have installed NodeJS from the website and run javascript files using node
* Npm was also installed and we used it to install the typescript compiler globally
* We have created ts project and compiled it with TSC and run it with Node
* Finally, we have configured tsconfig.json so we can continuesly compile our project in the background

### Introduction to angular
* We used npm to intall the angular CLI
* We used the cli to generate a new angular project using `ng new`
* we have run the application using `ng server` and viewed the application in the browser
* We went over the project structure and files, including `main.ts`, `index.html` and `styles.css`
* We have inspected the App Module and App Component and understood that
    * Angular applications are divided into Modules
    * A plain class turns into an Angular module using the `@NgModule` Decorator
    * Angular Modules contain components (amongst other things)
    * A plain class turns into an Angular Component using the `@Component` Decorator
* The anuglar engine inspects the DOM, and applies it's magic on elements it recognizes as components
    * Inject the template into the DOM node
    * Instantiate the component class
    * Bind the html to the component instance members
    
### Next week, we will...
1. Dive deep into Angular Binding
2. Build some awesome applications
3. Dive deep into Angular Components
4. Do some cool CSS layouts

## Day 2 - Components
### Projects:
|     |     |
| --- | --- |
| [hello-angular](https://github.com/kobi2294/Mataf/tree/master/Day%2002/hello-angular) | Creating search page using  angular binding | 
| [notepad](https://github.com/kobi2294/Mataf/tree/master/Day%2002/notepad) | Demonstrating selection, and components input and output |
| [pop-quiz-ex1](https://github.com/kobi2294/Mataf/tree/master/Day%2002/pop-quiz-ex1) | The solution to the class exercise practicing components |
| [fun-with-components](https://github.com/kobi2294/Mataf/tree/master/Day%2002/fun-with-components) | Using ng-content in components |


### Introduction to angular binding
* We created the [Hello Angular app](https://github.com/kobi2294/Mataf/tree/master/Day%2002/hello-angular).
* We have seen how to "think MVVM" - describing the logic of our application in the view model and then writing the view and binding it to the view model.
* We have created a search application view model the performs search of a keyword
* We have seen `*ngIf` and `*ngFor` and understood what are structural directives and how they work
* We have used the `[disabled]` directive to disable the search box and button when the search is in progress

### Introduction to Grid Layout
* We have seen the Grid layout, and how to use it to create modren responsive UI layout
* We have seen how to declare grid lines using `grid-template-rows` and `grid-template-columns` on the container
* We have seen how to place grid children on a specific row or columns using `grid-row` and `grid-column` properties
* for more information, see the [complete guide to grid on CSS TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/): 

### The notepad app
* We have created a responsive layout using css grid
* We have created a view model holding the lists of colors, fonts and sizes and the selected item in each array
* We have added actions that modify the selected color, font and size
* We have created a list of items in the HTML, and allowed to select color, size and font
* We have used fancy CSS to decorate it and make the app look nice
* We have learned about [class.XXX] and [style.XXX] directives
* See the project in [The Notepad app](https://github.com/kobi2294/Mataf/tree/master/Day%2002/notepad)

### Exercise 1 - Pop Quiz
* See the details of the exercise here: [Exercise 1 - Pop Quiz](https://github.com/kobi2294/Mataf/wiki/Exercise-1---Pop-Quiz)
* See the solution here: [pop-quiz](https://github.com/kobi2294/Mataf/tree/master/Day%2002/pop-quiz-ex1)

### Componantization of the notepad component
* We agreed that writing full scale applications in one component is difficult to maintain, which is why angular was built to support multi-component applications
* We created a `title-presneter` component that presents a title
* We have used the `@Input` Decorator to add input properties that may be passed through the HTML
* We saw the difference between passing data using `[prop]="expression"` syntax and `prop="text"` syntax. Where the first is used to bind data from the view model, and the second is used to pass a hard coded string.
* We used the cli to auto-generate components using `ng g c components/component-name`. See more details [Here](https://angular.io/cli/generate#component)
* We used the `@Output` Directive and the `EventMitter<T>` class to create our own events and raise them in our components
* We used the `(event)="action()"` Syntax to respond to an event in the container component
* We used the `$event` keyword to access event data

### Using ng-content in our components
* We created the [Fun With Components](https://github.com/kobi2294/Mataf/tree/master/Day%2002/fun-with-components) project. 
* We have created an expander component that displays a header and a content, and allows to toggle the content visibility.
* We used `<ng-content>` to inject the content into the template
* We used `<ng-content select="selector">` syntax to inject specific parts of the content into our template
* We used the `<ng-content select="[attribute]">` syntax to select content parts by attribute

### Homework
* Attached is a presentation and a video that present an exercise and its solution
* [The presentation](https://www.dropbox.com/s/rkhx8ge3lj5um6t/Description.pptx?dl=0)
* [The Video](https://www.dropbox.com/s/8ybqibl7geul9bm/Solution.mp4?dl=0)

Good Luck :-)
