import React from "react";
import PropTypes from "prop-types";
import { Item } from "../Item";
import style from "./style.scss";

const ItemList = ({ items }) => (
  <ol className={style['item-list']}>
    {items.map(item  => (
      <Item item={item} key={item.id} />
    ))}
  </ol>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }))
};

export { ItemList };
