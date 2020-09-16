## tutorial 1
- The prerequisites to builing a react app are:
 Babel (for giving next gen support for web browsers)
 webpack (for bundling)
 npm for dependency management 
 a developer server 

 ## jsx basics
 - JSX looks like an html but its nont exactly html
 - the reason why we import react is to use react during the compile time to cconver thte jsx syntax into "react" syntax 
 - An example would be:
 <div className="random">
 <h1> Hi there </h1> 
 <div>
 can be converted into  
 ```
 React.createElement("div", {className: "random"}, React.createElement("h1",null,"Hi there"))
```
- We should prefer using jsx because its more readable and there will be no chains of function which will take you to the pit of doom

## jsx restriction 
- class keyword cannot be used as its a reserved word in js hence we use className
- we should make sure whatevver the render function is returning is under a root noded. meaning everythng we return should be wrapped under a jsx component 
- the first argument to create element is not a html tag rather its a jsx keyword which gets parsed into an html tag using the react library 

## creating a functional component 
- component is just a function or a class which returns a jsx 
- if we are using a functional component because we wont be extending the component class rather we will only be returning a jsx.
- also dont forget to export your file using `export default function_name` and import it wherever you want to use it.
- when we are importing we need to use snake case with upper case as starting because lower cases are reserved native html components 
- you can now use the component you have imported by using <Component> </Component> or  <Component /> (if only child component) present
