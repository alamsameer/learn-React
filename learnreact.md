# Getting started with React

```js
   <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"></script>
```

## env set up

> eslint <br>
> parcel <br>
> babel <br>

## React component

```js
React.createElement("div", {}, " content here");
React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "your content here")
);
```

React.createElement(Pet),

### props

```js
    React.createElement(Pet,{name:"lpepper",animal:"cat",breed:"cocoktail"}),
```
 ### exporting one component 
 ```js
     export default Pet //
```
 ### importing one component 
 ```js
 import Pet from "./Pet"  //  name should start with capital letter
 ```
## core concept of react

* jsx -- directly html into js
* whenever anthing change in page react re render  cycle ,
* hooks 
    * an api to manage the state of the Application ,suppose  an input has a value " sameer " and i want to change ti another name let say "another person name" and this sthing is maanged by the hooks 
    * for me what i understod is that it is mechanism to update itsels ,without providing hook react rerender cycle and every time any key is pressed it put that word without updatin itself

## hooks application 
  useState()
     * used whenever something change on the page

 ```js
     const [location,setlocation]=useState("malhi more") 
           
      // here  we are using destructuring  where setLocation is function and it update the value of location when changes happen and by default location has value of malhi more
 ```
 > never put hooks inside for loop or if ,while loop   because hooks is callled in order 

#  useEffect
  it is use when u  have fetch data,anything  side efect of doing anything

  you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates

  By default, it runs both after the first render and after every update. 

  ```js
    useEffect(
    ()=>{
      requestPets()
    }
  )
  ```
  above code will run  after every render 
 ```js
    useEffect(
    ()=>{
      requestPets()
    },[]
  )
  ```
  using [] it will run one time 
  ```js
      useEffect(
    ()=>{
      requestPets()
    },[animal]
  )
  ```
  now when tht animal value is change it will call the useEffect's function
 ## useRef
   it can be used  when you want to create element only once and to create for every  render so that we use  useRef so that we can passs the render cycle  without Error
  #### custom hooks
  ### handling user input 
  ```js
  onClick={()}
    onCut={()} ..and many other
  ```
  Now after clicking it always bring back to the same page
  #### sTRICCT MODE

  ```js
  import {StrictMode} from "react"
  <StrictMode>?*component you want ot to be in strict mode */</StrictMode>
  ```
  ### react router
  ### 5
  Routing is a process in which a user is directed to different pages based on their action or request.

  When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

  Components in React Router

There are two types of router components:

    <BrowserRouter>: It is used for handling the dynamic URL.
    <HashRouter>: It is used for handling the static request.

    In the starting if you want to display multiple view in single match the router will start matching according to OR  from left to right and  if it does not find in between any path  the it will not match . whe n it matched it will show all atasame time 

     so we use switch so that it match onething at the same time

    React Router will render all components that the path match.
    React Router does partial matches. The URL /teachers/jem/young will match the paths /, /teachers, /teachers/jem and /teachers/jem/young. It will not match /young, /jem/young, or /teachers/young.

## react router link
  
  we use link in place of anchor tag so that it does not reload whole application 
  ```js
  <link to="link address">
  </link>
  ```

  ### class component
 here is how any class component is  made
 it already contain render  method 
  ```js 
  class Detail extends Component{
    render(){
        return <h2></h2>
    }
}
  ```
  we have component named *Detail* and it extends the React.Component  class now has access to many useful React features, such as local state and lifecycle hook

 *Detail* class has a constructor defined within it that calls " super() ". It uses super() to call the constructor of the parent class, in this case React.Component. 

## stateful and stateless component 
  *state*:-in React is state. State consists of any data your application needs to know about, that can change over time.
   
  *  You have access to the state object throughout the life of your component
    
  * If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.

  * When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop

  *  if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props.

  *stateless component*  :-stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props they not use their internal state

 >A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

 # classComponent
 ##### Topics
     - render
     - props 
     - Component.defaultProps
     - Component.propTypes
     - setState
     - binding this

class setState
  * React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState()

  ### state in classcomponent
  It is inside the constructor method
   ```
       this.state = {
      text: "Hello"
    };
   ```
   Inside the constructor
   ### Binding  this 
   ```
    this.handleClick=this.handleClick.bind(this)
   ```
   ### setting state 
   ```
     handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
   ```
# counter 
  ```
  this.increment=this.increment.bind(this)
this.reset=this.reset.bind(this)
    // Change code above this line
  }
  // Change code below this line
  increment(){
    this.setState({
    count:this.state.count++
    })
  }
    reset(){
    this.setState({
    count:0
    })
  }
  ```
  ## lifecycle method
    React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time.

    This can be before they are0*rendered*, before they update, before they receive props, before they unmount, and so on. 

### lifecycle method 

 > *this* inside refer to the class componet we are working on 

 <strong>this.setState() </strong> will be used to set the state of all the state defined in contructor
   main lifecycle methods:

    componentWillMount() :-The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.when render start then it called it first call ,use it where to fetch the data

    componentDidMount() :- This method is called after a component is mounted to the DOM.

    When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data. 

    The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality.

    shouldComponentUpdate() :- a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
    
     componentDidUpdate()
    componentWillUnmount() :- componentWillUnmount(), remove this same event listener it is used to clean u  any method 

  #### lifecycle best practice 
   * The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().

   * The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality 

  * if you want to attach an event handler to the document or window objects, you have to do this directly.

  *  It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed

  ### inline style

  JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object.

  Html inline style
  ```
  <div style="color: yellow; font-size: 16px">Mellow Yellow</div>
  ```
  React Inline style
  ```
  <div style={{color: "yellow", fontSize: 16}}>
  ```

  >keyBoard trick :
  select a line in vs code <br>
  from start<br>
  *shift+Home* <br>
  from end <br>
  or*shift+End*

  React inline style rule 
   * Names of certain CSS style properties use camel case. exfont-size,fontSize
   * All property value length units (like height, width, andfontSize) are assumed to be in px unless otherwisespecified. 
   * If you want to use em, for example, you wrap the valueand the units in quotes, like {fontSize: "4em"}.

   * we can put a globa lvariable to store all the styling
   ## we can write js in the render  method of  the class component  

   ### React Router v-5

    for Router to work 
     we need to install 
    *npm install react-router-dom@5.2.0*

    whenever you route with path without switch it matches all the path 
  *switch* whenever the route is inside the switch it matches th single path not all the path 

  *link* using this in place of a tag of html with using i twill not reload evry time youclick the link

  # &&conditional operator
    ```
    {condition && <p>markup</p>}
    ```
    if the condition is true then  it will show the markup

### map in react Component
the map method is used to dynamically render a number of elements based on user input. However, there was an important piece missing from that example. When you create an array of elements, each one needs a key attribute set to a unique value

React uses these keys to keep track of which items are added, changed, or removed

## server side rendering
React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a renderToString() method you can use for this purpose.

for this purpose we use 
```
ReactDOMServer.renderToString(element)
```
## ErrorBoundries
 we usually use this lifecycle method or we just can say error boundry just whenever anything crash in our react just send back the user a good  place or  do something with that error

# Redux

> what is Redux why we use it ?

   Redux is a state management framework that can be used with a number of different web technologies, including React.

   suppose we have differnet Component in React an they have their own state ut after using Redux it store all the State at single Place usi



  ## Redirect in React 
    we have *Redirect* in React-dom-Router to use to direct with to another page or desired page

## Context
  use to know all the component a global state 

  context will solve the props Drilling :- passing from parent to children parent to children

    
## Modals
  It is used to infor m the user that you havee done this and with that we are returning this to you
    