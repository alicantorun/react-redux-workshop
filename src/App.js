import React from "react";
import "./App.css";
import Store from "./Store";
import { Provider } from "react-redux";
import StarWars from "./components/StarWars";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={StarWars} />
            <Route exact path="/weather" component={Weather} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
