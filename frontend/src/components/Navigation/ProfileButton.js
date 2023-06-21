import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import MyListingsPage from "../Sell/MyListingsPage";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ProfileButton({user}) {
    const dispatch = useDispatch();
    const[showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };
      
      useEffect(() => {
        if (!showMenu) return;
    
        const closeMenu = () => {
          setShowMenu(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);
    
      const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
      };

    return (
        <>
        <button onClick={openMenu}>
            <i className="fa-solid fa-user-circle" />
        </button>

        {showMenu && (
        <ul className="profile-dropdown">
            
          <li>{user.username}</li>
          <li>{user.email}</li>

          {/* <button onClick={()=><MyListingsPage/>} >My Listings</button> */}
          <Link to={`/mylistings/${user.id}`}>My Listings</Link>

          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
        </>
    )
}