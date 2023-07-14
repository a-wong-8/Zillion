import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SellPage from "./components/Sell/SellPage";
import HomePage from "./components/Buy/HomePage";
import MyListingsPage from "./components/Sell/MyListingsPage";
import EditPage from "./components/Sell/EditPage";
import BuyShowPage from "./components/Buy/BuyShowPage";
import BuyPage from "./components/Buy/BuyPage";
import MySaves from "./components/Sell/Saves";

function App() {

  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage}/>

        <Route exact path="/buy" component={BuyPage}/>

        <Route exact path="/sell" component={SellPage}/>

        <Route exact path="/mylistings/listings/:listingId/edit" component={EditPage}/>

        <Route exact path="/mylistings/:userId" component={MyListingsPage}/>

        <Route exact path="/mysaves/:userId" component={MySaves}/>

        <Route exact path="/listings/:listingId" component={BuyShowPage}/>

      </Switch>

    </>
  );
}

export default App;
