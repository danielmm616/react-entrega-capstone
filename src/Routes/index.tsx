import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login"></Route>
      <Route path="/register"></Route>
      <Route path="/shop"></Route>
    </Switch>
  );
};

export default Routes;
