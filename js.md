# next gen JS notes 

## Let and const
- Let has local scope and is used instead of var
- const is a constant whose cannot be changed 
- Let cannot be called before the initialisation unlike var

## Arrow functions
1. general syntax 
`
const f = (arg1, arg2) => {
	let a = 1
	return a
}
`
2. single argument syntax 
`
const f = arg1 => {
	let a = 1
	return a
}
`
3. single return syntax 
`
const f = (arg1) => arg1*2 
` 

## exports and import  
- export default means that one can import it to any name
- export a specific name means that one has to import to the specific name by using {} as named imports
example
person.js
```
const person = {max: true}
export default person
```

utility.js
```
export const random = 45 
```
app.js 
```
import person from './person.js'
import prs from './person.js'
import { random } from './utility.js'
import {random as rnd} from './utility.js' //aliaa
import * as bundled from './utility.js' // you can use bundled.random and bundles is a js object

```
## classes
[Refer this link to get a clear picture of classes in js](https://www.w3schools.com/js/js_object_classes.asp)
for es7 you dont  need this keyword one can directly defin properties inside a class
`
class message {
	key = "hi"
}
`
