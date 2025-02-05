import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className="head">
      <div className="comp">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact ME</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home img</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
