import React from "react";
import { Link } from 'react-router-dom'
import style from "./style.scss";

export const Logo = () => (
  <Link className={style['nav-logo']} to="/">Test - ML</Link>
);
