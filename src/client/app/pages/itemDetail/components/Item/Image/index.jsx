import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const IMAGE_SIZE = 680;

const Image = ({ title, src }) => (
  <img
    className={style['item-detail-image']}
    width={IMAGE_SIZE}
    height={IMAGE_SIZE}
    alt={title}
    src={src}
  />
);

Image.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export { Image };
