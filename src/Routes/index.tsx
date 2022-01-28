import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/RegisterPage";
import Vendedor from "../Pages/Vendedor";
import Shop from "../Pages/Shop";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/vendedor">
        <Vendedor />
      </Route>
    </Switch>
  );
};

export default Routes;
