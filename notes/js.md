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
## spread and rest
### spread
One can spread an object and inject into another obj by doing this
```
let oldObject = {a: 1, b:2}
let newObj = {...oldObject, c: 2}
console.log(newObj)
```

One can also spread an array into another array by doing this
```
let oldObject = [1,3,3]
let newObj = [...oldObject,2]
console.log(newObj)
```
### rest 
using the same operator one can recieve the spread argments as an array
```
function sortArgs(...args) {
  return args.sort()
}
console.log(sortArgs(1, 3,2,9,7))
```

## Destructuring 
array destructuring
```
[s,b]= [1,2,3,4]
console.log(s,b) //prints 1 2
[s, ,b]= [1,2,3,4]
console.log(s,b) //prints 1 3
```
object destructuring
```
{s,b}= {s:1, b:3}
console.log(s,b) //prints 1 3
```
[a good blog on deep refactoring](https://dmitripavlutin.com/javascript-object-destructuring/)

## reference and primitive type refresher
- primitive types are not references rather copies
- obj and arrays are references 
example 
```
let human = {name: "random name"}
let human2 = human
human.name = "non random name"
human2.name = "not so non random name"
console.log(human2)
console.log(human)

```
when either one of the variables are changes all the references are effected

Top change this in immutable way we can:
```
let human = {name: "random name"}
let human2 = {...human}
human.name = "non random name"
console.log(human2)
console.log(human)
```
## refreshing array functions 
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
pop() => https://www.w3schools.com/jsref/jsref_pop.asp
push() => https://www.w3schools.com/jsref/jsref_push.asp
shift() => https://www.w3schools.com/jsref/jsref_shift.asp
unshift() => https://www.w3schools.com/jsref/jsref_unshift.asp
