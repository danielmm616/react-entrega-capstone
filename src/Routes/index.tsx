import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/RegisterPage";
import Vendedor from "../Pages/Vendedor";
import Cart from "../Pages/Cart";

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
      <Route path="/shop"></Route>

      <Route path="/vendedor">
        <Vendedor />
      </Route>
      <Route path="/cart">
       <Cart/>
      </Route>
    </Switch>
  );
};

export default Routes;
