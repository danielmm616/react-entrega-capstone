import { Switch, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/RegisterPage";
import Seller from "../Pages/Seller";
import TeamPage from "../Pages/TeamPage";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
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
      <Route path="/sellerPage">
        <Seller />
      </Route>
      <Route path="/aboutus">
        <TeamPage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
