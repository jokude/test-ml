import React from "react";
import PropTypes from "prop-types";
import { Image } from "./Image";
import { Info } from "./Info";
import { Description } from "./Description";
import { Button } from "./Button";
import style from "./style.scss";

const Item = ({ item }) => (
  <div className={style['item-detail-container']}>
    <section className={style['item-detail-info-image-container']}>
      <div className={style['item-detail-image-container']}>
        <Image title={item.title} src={item.picture} />
      </div>
      <div className={style['item-detail-info-container']}>
        <Info title={item.title} price={item.price} condition={item.condition} sold_quantity={item.sold_quantity} />
        <Button />
      </div>
    </section>
    <Description description={item.description} />
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    sold_quantity: PropTypes.number.isRequired,
    price: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      currency:PropTypes.string.isRequired,
      decimals: PropTypes.number.isRequired
    })
  })
};

export { Item };
