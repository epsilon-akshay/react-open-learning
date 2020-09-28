# lets go beyond basics

## how to structure your project 
- it always better to have a components package and container package 
- components pacakge contains ui elements, should not contain states, can be small and many components can be present
- container package should not contain much ui elements rather should have methods to handle state
- use class componenets if you want state control and use function otherwise
- class based components have component lifecycle 

## Component lifecycle
- The component lifecycle methods are: 
	- contructor() 
	- getDerivedStateFromProps() 
	- getSnapshotBeforeUpdate() 
	- componentDidCatch() 
	- componentWillUnmount() 
	- shouldComponentUpdate()
	- componentDidUpdate() 
	- componentDidMount() 
	- render()
- Component lifecycle - creation
	1. Constructor 
	 	- will receive props 
		- call super(props)
		- setup state
		- do not cause side-effect (storing or sending data or re-rendering cycles)
	2. getDerivedStateFromProps(props, state)
		- static method
		- this is used to update state when a prop change
		- rarely used 
		- should use to sync states
		- no side effects 
		- retrunes the new state
	3. render()
		- use it to layout jsx code 
		- should return react component or jsx which internally compiles into a react component
		- should not set timeouts or send http requests which would block stuff
	3. render() Child Components
	4. componentDidMount() 
		- cause side effects
		- this is called after the component is loaded and rendered
		- generally where http requests are placed
		- should not update state here (in sync)
		

## component update lifecycle 
- getDerivedStateFromProp(prop, state)
	- would not use it normally 
	- Generally used to update the state when there a prop change (let it be some form externally being validated and other stuff)
	- There is often elegant way to manage it better 
	- no http request and all 

- shouldComponentUpdate(nextProp, nextState)
	- Decides whether the component shoud update or not
	- basically for performance optimisation
	- dont cause side effects in this 
- render 
	- constructs the virtual dom 
	-updates child render
- getSnapshotBeforeUpdate(prevProps, prevState)
	- Used for getting the last minute dom structure
		- eg : getting the scroll position of user
	- like get the snapshot of the user just before the update happens
- componentDidUpdate
	- Cause sideeffects
	- do not run an infinite loop here meaning update again
	- Do not update state
refer examples cs



