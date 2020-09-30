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
refer examples cmp/deepdive


- Child components get updated and then the state component updates

## functional component updates 
- We need to use UseEffect hook in functional components 
- It is called for ever render cycle it takes in a function and executes that function 
- generally you run your http requests in useEffect and when udes with useState then can have access to state
- inoder tyo control for when the state changes then you acn pass in a second argument that will decide when to change the state, its an array which takes all the props that is meantfor change or state.
- to run only once during the created time then we can pass an empty array which will tell that it has no dependencies and it should rerun when every one of dependencies chagnes so this is possible when the prop is updated once. 
- so it will run like component did mount 

## clean up hooks 
- using classes we ill call component will unmount (), there where the component disappears then we will be calling teh function 
- gengerally all clean up work is done here, like killing connections and all 
- in terms o use effect function one can return a function which will be called when unmounted. it will RUN BEFORE THE MAIN USE EFFECT AND AFTER THE RENDER CYCLE
- You can also run a clean up task in use effect by passing no second arguments hence a clean up task will be run before the use effect 

## Using ShouldComponentUpdate for optimisation 
- Lets say we have a parent compoennt with 2 children B and C, and we want a state change in A that will impact B to not re render C. 
- in this case we will change the  ShouldComponentUpdate in C to have some checks 
The check would be nextProp.Person !== this.Prop.Person
Array are referenced types so we need to create a copy and then check it, its a shallow comparison hence one has to be carefull here
- One can enable paint flashing to check what all are rendered everytime 
- Note here is that we wont be optimising the real DOM this is just a pre rendering optimisation
- For functioanlcomponents that might not need to update with every change in the parent component we can ues React.memo() and wrap the export (this is memoisation)

- easier optimisation -
	- If you wanna check for all props change then instead of using shouldComponentChange we can extend PureComponent, This will execute when all props change

## virtualDOM
- It does not rerenders the whole DOM, it compared the old virtual DOM vs the real dom(virtual dom is a virtual represenation of a DOM jsut some js code(html code in js))
- it compared the old virtual to the the real Dom, and then changes where the differencers where detected
- ACCESSING THE REAL DOM IS REALLY SLOW
- will write why ?

## rendering adjacent jsx 
- React can render an array of elements that it requires and it needs a key for that, 
- Other wise react can wrap arounf any div in one element 
- WE can just use an array and have adjacent elements in a component
- Other way to do it is we can create an auxillary compoenent which does nothing but calls its children, we can now wrpa any compoennt with this auxillary component
- Later versions of react after 16 we use react.Fragment instead of creating a customer class

## HOC 
- The above aux wrapper is called  a higher ordedr component
- EX: 
```
const withClass = (props) => {
	return (
	<Div className = {props.classes}>
	{props.children}
	</Div>	
	)
} 
``` 
- WE can refactor it to a FUNCTION WHICH RETURNS A COMPONENT and name the file starting with lower case
example 
```
const withClass = (WrappedClass, className) => {
	return (props) => {
	<Div className = {className}>
	<WrappedClass>
	</Div>
	}
}
The props here refers to the props of the CALLING FUNCCTION<THIS IS SIMILAR TO LAMBDA FUNCTONS> now the caller will send ts props here and we can use it from here and pass the required props to wrapper class. 

const withClass = (WrappedClass, className) => {
	return (props) => {
	<Div className = {className}>
	<WrappedClass props = {props}> // this wont work, this will be added as a property in the props component
	<WrappedClass {...props}> // do this
	</Div>
	}
}

and one can use this while exporting `export default withClass(App(class name for any component), cssClassName)`
```

- This is generally use to change styling or send errors or send some analytics data


## setState and propsTypes 
- set state is always scheduled to run and not run immmedietly 
- if 2 states is called concurrently then there will be mutation probelm 
- so the better way to do is (if you want to set state based on old state) = > 
```
this.setState((previousState, props) => {
	return {
		counter: previousState.counter+1
	}
})
```

- do an npm install --save prop-types
- this 	`import PropTypes from 'prop-types';
- This is to specify what props we are sending 
-
```
afer you define your prop then before the export statement 
componentClass.propTypes = {
	propName: PropType.string	
}
```

## refs 
- in react lets say inordder to focus on one of the arrray elements which gets renders we can use document.QuerySelector and stuff but it wont work the way we expectc it to, this is because this operation is perfromed on the DOM and not hte virtual DOM, (we can alwayse pass an id)
- but the easiest way to do is pass a ref as a type to the html element in the crender method
- ref = {(inputElem) => {
write your logic lets say set a global varabe and run this in componentDidMount
or even do inputElem.focus

}}

- in later versions of react you can:
```
constructor(props) {
	super(props) //always 
	this.inputElem = React.createRef()
} 
componentDidMount() {
	this.inputElem.current.focus() // if t has a focus method, current will give you the reference
}
ref = {this.inputElem}

```

- Ref with react hooks
```
we have useRef(null) (instead of constructor just use it as a first line in function )
- we have to call the propetues after useEffect (as use effect is run after render) 
- 
```

## Context
 - There is a problem called prop chaining which is simply passing the props to downstream classes without using them
 - To avoid this we use context
 - you can create a context by using const AuthContext = React.createContext({}) //js object or string
 and export that constant
  - You should wrap wjhat all places tou need to pass a context 
  eg: <AuthContext.provider value={{key: value}}>
		<component1 />
		<compoennt2 />
		</AuthContext.provider>

		
- If context has stae it updates when state is updated
Components who want to use a context should just wrap the element in <authContext.consumer>
{(context) => {jsx code}}
</authContext.consumer>

- In functional component or in class
 you can use context as static property 
 - static contextType = AuthContext
 and you can use context.key in all methods

- in functional component you can use authCOntext = useContext(authContext)
and use it like an object in js


