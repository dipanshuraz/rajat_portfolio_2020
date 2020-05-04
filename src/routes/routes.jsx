import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavPublic";
import Home from "./Home";
import NotFound from "./NotFound";

export class routes extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar />
          <Switch>
            <Route path="/" exact render={() => <Home />} />

            <Route path="" render={() => <NotFound />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default routes;
