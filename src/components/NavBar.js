import React from "react";
import {  Link  } from "react-router-dom";


function NavBar() {
  return (
    <div className="NAV">
      <nav >
        <ul className="nav-bar">
          <li className="nav-btn">
            <Link className="nav-item" to="/">Card</Link>
          </li>
          <li className="nav-btn">
            <Link className="nav-item" to="/mAccount">Mobile Account</Link>
          </li>
          <li className="nav-btn">
            <Link className="nav-item" to="/voucher">Voucher</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
