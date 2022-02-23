import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMathcRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItems" onClick={() => navigate("/")}>
            <ExploreIcon fill={pathMathcRoute("/") ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
            <p className={pathMathcRoute("/") ? "navbarListItemNameActive" : "navbarListName" }>Explore</p>
          </li>
          <li className="navbarListItems" onClick={() => navigate("/offers")}>
            <OfferIcon fill={pathMathcRoute("/offers") ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
            <p className={pathMathcRoute("/offers") ? "navbarListItemNameActive" : "navbarListName" }>Offer</p>
          </li>
          <li className="navbarListItems" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill={pathMathcRoute("/profile") ? "#2c2c2c" : "#8f8f8f"} width="36px" height="36px" />
            <p className={pathMathcRoute("/profile") ? "navbarListItemNameActive" : "navbarListName" }>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
