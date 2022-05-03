import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/header/header";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in and sign-up/sign-in-and-sign-up";
import "./App.css";


function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />

      </Switch>
    </div>
  );
}

export default App;
