# Rendering List and conditional content

## conditional rendering
- inorder to lets say conditionally render something we can use the teriniart operatpr inside a {} in a jsx expression (if else cannot be done as its a single line statement)
- also the condition on the terniary could be a state of the component
- you can extract out the div logic part (jsx part) outside to a variable in java script and then render use the per son variable  to render (using {var name}) make sure this is in the render function as re-rendering calls the render method

## list rendering 
- we can use normal java script function or even wrap it to different function and return somthing like this:
```
{this.state.randomState.map(
	(randomStateArg) => {
		return <customState name={randomStateArg.name}/>
	} 
)}
```
- KEEP IN MIND that when updating an array that objects and arrays are js references so you have to either  create a copy using slice method or use ... operator. 
- ALWAYS UPDATE STATE IN INMUTABLE FASHION 
- We need to add a key elemet to the prop for the custom component we are creating because react needs to know that there are elements which are unique for its internal implementation (will go through this later)
- Generally use object.assign to assign objects
- Use ids if you are using list to have a key and have a unique identifier which can easily handle change 

## Styling 
- you can add dynamic styling to your reacct components in a normal way how you would do for java script
example 
```
render(){
	var style = {
	width: "500px"
}
	if (any state change) {
		style.width = "600px"
	}

	return  (
		<div style = {style}>
		<div>
	)
} 
```
-  Similarly you can also assing dynamic class names to your elements just by creating a sting joined by space and assignng to your element
- Using Radium
	- using pseudo selector and media qeuries cannot be done throught normal react code(in a easy way)
	- we use radium, to use radium we have to import radium also wrap the export as radium 
	- example 
	```
	var style = {
	width: "500px"
	':hover': {
		color: 'red'
	}
}
	```
	- Inorder to use style components (media query or key frames) we have to import { StyleRoot } from radium package and wrap your div which u use radium under <StyleRoot>
	example 
	```
	var style = {
		'@media (min-width: 500px)': {
			width: "600px"	
		}
	}
	```
	- Note: This would be added inside a div hecne we do not need to speccify the class and overide it like ```
	@media (min-width: 500px): {
			div {
				width: "600px"
			}	
		}
	``` 

- Styled Components 
	- we use taggedd template functions to use styled components - its similar to radium
	- every (style componnets) has a function which is named after the html tag styled.<tag> returns a react component.
	hence we can put it out as a different component in react then you can use it instead of your div or any component as a regular react component
	- example 
	```
	const StyledDiv = () => {
		return styledComponent.div`
		width: 60px; // write just as .css file

		&:hover: {
			width: 60px;
		}
		`
	}

	<StyledDiv>
	<p>Hi there</p>
	</StyledDiv>
	```
- How it works under the hood is that it creates a css class and puts it under the head andd uses it whenever we use the styled components
- We can work with dynamic styling in styled components by just passing a different attribute (any name) to the styled component  as prop and using the prop in the styled component inordedr to do dynamic styling 
- 

## debugging 
- Go to your source code n chrome dev tools and add debugging statements s
