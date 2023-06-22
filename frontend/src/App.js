import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SellPage from "./components/Sell/SellPage";
import BuyPage from "./components/Buy/BuyPage";
import MyListingsPage from "./components/Sell/MyListingsPage";
import EditPage from "./components/Sell/EditPage";

function App() {
  return (
    <>

  <Navigation />

    <Switch>

      <Route exact path="/" >
        <BuyPage/>
      </Route> 

      <Route exact path="/sell" component={SellPage}/>

      <Route exact path="/mylistings/listings/:listingId/edit" component={EditPage}/>

      <Route exact path="/mylistings/:userId" component={MyListingsPage}/>


      {/* <Route path="/listings" >
        <BuyPage/>
      </Route>  */}

    </Switch>
    </>
  );
}

export default App;
