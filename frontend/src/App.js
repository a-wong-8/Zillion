import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SellPage from "./components/Sell/SellPage";
import BuyPage from "./components/Buy/BuyPage";
import MyListingsPage from "./components/Sell/MyListingsPage";
import EditPage from "./components/Sell/EditPage";
import BuyShowPage from "./components/Buy/BuyShowPage";
import BuyListing from "./components/Buy/BuyListingIndex";
// import ListingIndex from "./ListingIndex";

function App() {

  // const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     const res = await fetch("/api/listings");
  //     setListings (await res.json());
  //   }
  //   fetchListings();
  // }, []);

  return (
    <>
      <Navigation />

      <Switch>
        <Route exact path="/" component={BuyPage}/>

        <Route exact path="/buy" component={BuyListing}/>

        <Route exact path="/sell" component={SellPage}/>

        <Route exact path="/mylistings/listings/:listingId/edit" component={EditPage}/>

        <Route exact path="/mylistings/:userId" component={MyListingsPage}/>

        <Route exact path="/listings/:listingId" component={BuyShowPage}/>

      </Switch>
    </>
  );
}

export default App;
