## react an introduction
- a javascript library for building user interfaces
- react apps run in the browser
- things happen instanty as its in the browser and we dont have to wait for a server response 
- user interface is what the user sees, and react is about building componenets for that

## components
- every web page document can be split into components, components are smaller fragmentsof web pages
- react components can be thought of as customer html elements
- these components are maintainable managable and reusable 
- React is using logic to create logic for the components and REACTDOM is used for rendering these components into the original DOM

## why use react 
- UI state becomes hard to manage with vue
- we can concentrate on core bussiness logic rather thatn the ui 
- There are react alternatives which are Vue and angular but jquey is not so much of an alternative as it basically manages how to traverse the DOM so that wil be on how to concentrate on UI instead of business logic.
[link to understand better](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445)

## Types of web apps 
### Single page web application 
- There is only a single web page rendered by react completely
- It is rendered in the web browser 
- we only need one ReactDom.Render call because the root component is react 
### Multi page web application 
- It is rendered on the serve 
- There are multiple pages and some of them being managedd by react 
- multiple calls to render different components

[understnad a bit more on multipage and single page app](https://medium.com/@goldybenedict/single-page-applications-vs-multiple-page-applications-do-you-really-need-an-spa-cf60825232a3)
