import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  //const cartNum = 0;
  return (
    <div className="navBar">
      <Link to="/">Bookstore</Link>
      <Link to="/cart" className="cart-items">
        <BsFillBagFill />
        <p className="cart-num">{cartNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;