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

  #### custom hooks
  ### handling user input 
  ```js
  onClick={()}
    onCut={()} ..and many other
  ```

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