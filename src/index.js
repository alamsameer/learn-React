import React from "react";
import ReactDOM from "react-dom";
import SearchPet from "./searchPet";
import Detail from "./Detail";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "Havenese",
//     }),
//     React.createElement(Pet, {
//       name: "lpepper",
//       animal: "cat",
//       breed: "cocoktail",
//     }),
//     React.createElement(Pet, { name: "gaayba", animal: "dg", breed: "Havese" }),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "Havenese",
//     }),
//   ]);
// };

//   starting jsx

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt me !</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/">
            <Detail></Detail>
          </Route>
          <Route path="/">
            <SearchPet></SearchPet>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
