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

## you can refer the notes till now in `references/components.pdf`

## working with components andd making it dynamic 
- We mostly use functional component because its maintanable and reusable and configurable 
- to use dynamic variables we need to wrap it in single curly braces. 
example
```
render() {
	return (
		<p> Hi there im {Math.random()*30}</p>
	) 
}
```
- we can execute one line expressions in the curly braces or you could call functions that would do multiple things


## working with props
- There is  always one argument passed on by react to method calls which is called props
- Props contain the argument information that is passed on, its a js object
- example 
```
const age = function(props) {
render() {
	return (
		<p> Hi there im {props.age}</p>
	) 
 }
}

//and for class based

class Age() extends Components {
	render() {
		return (
		<p> Hi there im {this.props.age}</p>
	) 
	}
}
```
- You can access content passed onto the component class/function by using props.children
- example 
```
render() {
	return(
	<div>
		<Age name=alu> Hi </Age>
	</div>
	)
}

const age = function(props) {
render() {
	return (
		<div>
		<p> Hi there im {props.name} </p>
		<p> {prop.children}</p>
		</div>
	) 
 }
}

```

## understanding and working with states
 -  state has to be inside a class component
 - 	you can define state as `state= {person: [1 ,2 ,3]}`
 - if the state changes react will re render the DOM 
 
 ### more understanding for this on /references/props&state.pdf
