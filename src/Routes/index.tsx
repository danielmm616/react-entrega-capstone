import { Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register"></Route>
      <Route path="/shop"></Route>
    </Switch>
  );
};

export default Routes;
