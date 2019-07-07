import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import style from "./style.scss";

const IMAGE_SIZE = 180;

const Image = ({ id, title, src }) => (
  <Link className={style['item-link']} to={`/items/${id}`}>
    <img
      className={style['item-image']}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      alt={title}
      src={src}
    />
  </Link>
);

Image.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export { Image };
