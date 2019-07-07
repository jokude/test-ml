import React from "react";
import PropTypes from "prop-types";
import { Price } from "./Price";
import { Title } from "./Title";
import { Image } from "./Image";
import { Shipping } from "./Shipping";
import { Location } from "./Location";
import style from "./style.scss";

const Item = ({ item }) => (
  <li className={style['item-container']}>
    <Image id={item.id} title={item.title} src={item.picture} />
    <div className={style['item-info-container']}>
      <div className={style['item-price-container']}>
        <span>
          <Price {...item.price} />{item.free_shipping && <Shipping />}
        </span>
        <Location name={item.location} />
      </div>
      <Title id={item.id} title={item.title} />
    </div>
  </li>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      currency:PropTypes.string.isRequired,
      decimals: PropTypes.number.isRequired
    })
  })
};

export { Item };
