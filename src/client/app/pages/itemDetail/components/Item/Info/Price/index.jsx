import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const getPriceIntegerPart = amount => Math.floor(amount);
const getPriceDecimalPart = (amount, decimals) => (amount % 1).toFixed(decimals).substring(decimals);

const Price = ({ currency, amount, decimals }) => (
  <span className={style['item-detail-price']}>
    {`${currency} ${getPriceIntegerPart(amount)}`}
    <sup className={style['item-detail-price-decimals']}>
      {getPriceDecimalPart(amount, decimals)}
    </sup>
  </span>
);

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  currency:PropTypes.string.isRequired,
  decimals: PropTypes.number.isRequired
};

export { Price };
