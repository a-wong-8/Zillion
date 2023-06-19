import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './Navigation.css'
import SignupFormModal from "../SignupFormPage/SignupForm";

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
                    <NavLink exact to="/">Home</NavLink>
                    {sessionLinks}
                </li>
            </ul>
        </>
    );
}