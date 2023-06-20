import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
// import SignupFormModal from "../SignupFormPage/SignupForm";
import './Navigation.css'

export default function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
    
  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        {/* <SignupFormModal/> */}
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

    return (
        <>
            <ul>
                <li>

                    <NavLink to=""> Buy </NavLink>

                    <NavLink exact to="/sell"> Sell </NavLink>
                    
                    <NavLink exact to="/"> Zillion </NavLink>
                    {sessionLinks}
                </li>
            </ul>
        </>
    );
}