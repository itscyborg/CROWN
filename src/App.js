import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/header/header";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in and sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
