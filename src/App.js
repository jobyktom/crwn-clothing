import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Switch, Route, Link } from "react-router-dom";
const Hats = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats ID :  </h1>
      <Link to="/">Home</Link>
      <Link to={`${props.match.url}/13`}>To 13</Link>
      <button onClick={()=> props.history.push('/')}>Home</button>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
