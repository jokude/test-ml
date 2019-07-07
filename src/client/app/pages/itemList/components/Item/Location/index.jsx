import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const Location = ({ name }) => (
  <span className={style['item-location']}>
    {name}
  </span>
);

Location.propTypes = {
  name:PropTypes.string.isRequired
};

export { Location };
