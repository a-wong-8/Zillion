import React from "react";
import { Switch, Route } from "react-router-dom";
// import LoginForm from "./components/LoginFormModal/LoginForm";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SellPage from "./components/Sell/SellPage";
import BuyPage from "./components/Buy/BuyPage";
import MyListingsPage from "./components/Sell/MyListingsPage";

function App() {
  return (
    <>
  <Navigation />


    <Switch>

      <Route exact path="/" >
        <BuyPage/>
      </Route> 

      <Route path="/sell" >
        <SellPage/>
      </Route> 

      <Route path="/mylistings/:userId" component={MyListingsPage} >
        {/* <MyListingsPage/> */}
      </Route> 

      {/* <Route path="/listings" >
        <BuyPage/>
      </Route>  */}

    </Switch>
    </>
  );
}

export default App;
