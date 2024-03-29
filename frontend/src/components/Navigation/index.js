import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import './Navigation.css'
import logo from './logo.png'


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
                    <NavLink exact to="/buy"><span id="buy-header-button">Buy</span>  </NavLink>
                    <NavLink exact to="/sell"> Sell </NavLink>
                </li>

                <li id="home">
                    <NavLink exact to="/">
                      <img id="logo"src={logo}/>
                    </NavLink>
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