import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const Title = ({ title }) => (
  <h1 className={style['item-detail-title']}>
    {title}
  </h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Title };
