import React from "react";
import { Switch, Route } from "react-router-dom";
// import LoginForm from "./components/LoginFormModal/LoginForm";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SellPage from "./components/Sell/SellPage";

function App() {
  return (
    <>
  <Navigation />
    <Switch>

      <Route path="/sell" >
        <SellPage/>
      </Route> 

    </Switch>
    </>
  );
}

export default App;
