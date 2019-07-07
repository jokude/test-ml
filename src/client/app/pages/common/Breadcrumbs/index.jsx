import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import style from "./style.scss";

const Breadcrumbs = ({ items }) => (
  <ul className={style['breadcrumbs-containter']}>
    {items.map(item => (
      <li key={item} className={style['breadcrumb-item']}>
        <Link className={style['breadcrumb-item-link']} to={`/items?search=${item}`}>
          {item}
        </Link>
      </li>
    ))}
  </ul>
);

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export { Breadcrumbs };
