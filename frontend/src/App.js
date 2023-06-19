import React from "react";
import { Switch } from "react-router-dom";
// import LoginForm from "./components/LoginFormModal/LoginForm";
// import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
  <Navigation />
    <Switch>

      {/* <Route path="/signup" > */}
        {/* <SignupFormPage /> */}
      {/* </Route>  */}

    </Switch>
    </>
  );
}

export default App;
