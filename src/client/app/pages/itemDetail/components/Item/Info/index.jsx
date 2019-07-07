import React from "react";
import PropTypes from "prop-types";
import { Price } from "./Price";
import { Title } from "./Title";
import { Conditions } from "./Conditions";
import style from "./style.scss";

const Info = ({ title, condition, sold_quantity, price }) => (
  <div className={style['item-detail-info']}>
    <Conditions condition={condition} sold_quantity={sold_quantity} />
    <Title title={title} />
    <Price {...price} />
  </div>
);

Info.propTypes = {
  title: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  sold_quantity: PropTypes.number.isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
    decimals: PropTypes.number.isRequired
  })
};

export { Info };
