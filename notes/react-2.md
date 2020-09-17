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
