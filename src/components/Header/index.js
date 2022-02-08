import React from "react";
// import "./_header.scss";
import { logoPrimary } from "../../assets";
import { NavLink } from "react-router-dom";

const Header = ({ path }) => {
  // className={isScroll ? "scroll-header" : null}
  return (
    <header id="header" className="header">
      {/* <div className="logo-container"> */}
      <NavLink to={path}>
        <img src={logoPrimary} alt="logo lab" />
      </NavLink>
      {/* </div> */}
    </header>
  );
};

Header.defaultProps = {
  path: "/",
};

export default Header;
