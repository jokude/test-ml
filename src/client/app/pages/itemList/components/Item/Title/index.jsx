import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import style from "./style.scss";

const Title = ({ id, title }) => (
  <h2>
    <Link className={style['item-title']} to={`/items/${id}`}>
      {title}
    </Link>
  </h2>
);

Title.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export { Title };
