import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

export const Header = ({ children }) => (
  <header className={style['nav-header']}>
    <div className={style['nav-container']}>{children}</div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node
};