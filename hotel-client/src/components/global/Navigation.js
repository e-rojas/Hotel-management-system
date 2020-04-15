import React from 'react';
import { Link } from 'react-router-dom';
const path = window.location.pathname;
const Navigation = () => {
  return (
    <>
      <nav className="teal lighten-2">
        <div className="nav-wrapper pl-2">
          <Link to="/bookings" className="brand-logo ">
            <img id="logo" src="/images/logo.png" alt="" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className={path === '/bookings' ? 'active' : ''}>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li className={path === '/profile' ? 'active' : ''}>
              <Link to="profile">Profile</Link>
            </li>
            <li className={path === '/chat' ? 'active' : ''}>
              <Link to="chat">Chat</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
