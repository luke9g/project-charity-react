import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './style/App.scss';
import Home from "./components/Home"
import GiveAwayThings from "./components/GiveAwayThings";
import Login from "./components/Login";
import Register from "./components/Register";
import LoggedOut from "./components/LoggedOut";
import NotFound from "./components/NotFound"
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path={"/project-charity-react"} exact component={Home}/>
          <Route path={"/oddaj-rzeczy"} exact component={GiveAwayThings}/>
          <Route path={"/logowanie"} exact component={Login}/>
          <Route path={"/rejestracja"} exact component={Register}/>
          <Route path={"/wylogowano"} exact component={LoggedOut}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
