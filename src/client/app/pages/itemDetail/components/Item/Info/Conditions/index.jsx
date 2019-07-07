import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";
import { CONDITION_STATUS } from "./constants";

const getSoldText = sold_quantity => sold_quantity === 1 ? ' vendido' : 'vendidos';

const Conditions = ({ condition, sold_quantity }) => (
  <span className={style['item-detail-conditions']}>
    {`${CONDITION_STATUS[condition]} - ${sold_quantity} ${getSoldText(sold_quantity)}`}
  </span>
);

Conditions.propTypes = {
  condition: PropTypes.string.isRequired,
  sold_quantity: PropTypes.number.isRequired
};

export { Conditions };
