import { Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/RegisterPage";
import Vendedor from "../Pages/Vendedor";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/shop"></Route>

      <Route path="/vendedor">
        <Vendedor />
      </Route>
    </Switch>
  );
};

export default Routes;
