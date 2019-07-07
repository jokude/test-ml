import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const Description = ({ description }) => (
  <section className={style['item-detail-description']}>
    <h2 className={style['item-detail-description-title']}>Descripción del producto</h2>
    <p className={style['item-detail-description-content']}>{description}</p>
  </section>
);

Description.propTypes = {
  description: PropTypes.string.isRequired
};

export { Description };
