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
