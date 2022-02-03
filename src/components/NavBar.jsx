import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  //const cartNum = 0;
  return (
    <div className="navBar">
      <Link to="/">Bookstore</Link>
      <Link to="/cart" className="cart-items">
        <BsCartFill />
        <p className="cart-num">{cartNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;