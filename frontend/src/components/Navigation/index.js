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
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
      </>
    );
  }

    return (
        <>
        <header className="header">
          <nav className="header-nav">
            <ul className="header-list">

                <li className="header-list-item">
                    <NavLink exact to="/buy"> Buy </NavLink>
                    <NavLink exact to="/sell"> Sell </NavLink>
                </li>

                <li className="header-list-item" id="home">
                    <NavLink exact to="/">🏠 Zillion</NavLink>
                </li>

                <li className="header-list-item">
                    {sessionLinks}  
                </li>
            </ul>
          </nav>
        </header>
        </>
    );
}