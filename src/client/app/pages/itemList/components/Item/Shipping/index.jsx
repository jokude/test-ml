import React from "react";
import style from "./style.scss";

const ICON_SIZE = 20;

const Shipping = () => (
  <img
    className={style['shipping-icon']}
    width={ICON_SIZE}
    height={ICON_SIZE}
    alt="Envio Gratis"
    src="/assets/ic_shipping.png"
  />
);

export { Shipping };
