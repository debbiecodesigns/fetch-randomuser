import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserCards from "./component/fecthApi";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <UserCards />
          <Switch>
            <Route path="/callApi" component={UserCards} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
