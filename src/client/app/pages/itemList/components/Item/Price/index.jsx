import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const Price = ({ currency, amount }) => (
  <span className={style['item-price']}>
    {currency}{amount}
  </span>
);

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  currency:PropTypes.string.isRequired,
  decimals: PropTypes.number.isRequired
};

export { Price };
