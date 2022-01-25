import { Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login";

import RegisterPage from "../Pages/RegisterPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login"></Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/shop"></Route>
    </Switch>
  );
};

export default Routes;
