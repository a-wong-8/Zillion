import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";

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
        <NavLink to="/signup">Sign Up</NavLink>
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