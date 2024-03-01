import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink aria-label="Link to home page" to="/">
          Shop
        </NavLink>
        <NavLink aria-label="Link to shopping cart page" to="/cart">
          Shopping Cart
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
