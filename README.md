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
### Introduction to Grid Layout
* We have seen the Grid layout, and how to use it to create modren responsive UI layout
* We have seen how to declare grid lines using `grid-template-rows` and `grid-template-columns` on the container
* We have seen how to place grid children on a specific row or columns using `grid-row` and `grid-column` properties
* for more information, see the [complete guide to grid on CSS TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/): 
