import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

const submitHandler = inputRef => evt => {
  evt.persist();

  if(inputRef.current.value.trim().length == 0){
    evt.preventDefault();
  }
}

const Input = ({ value }) => {
  const inputRef = React.useRef();
  return (
    <form
      className={style['nav-search']}
      action="/items"
      method="GET"
      role="search"
      onSubmit={submitHandler(inputRef)}
    >
      <input
        ref={inputRef}
        type="text"
        className={style['nav-search-input']}
        aria-label="Ingresa lo que quieras encontrar"
        name="search"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        autoFocus=""
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        defaultValue={value}
      />
      <button type="submit" className={style['nav-search-btn']}>
        <img role="img" aria-label="Buscar" className={style['nav-icon-search']} src="/assets/ic_Search.png" />
      </button>
    </form>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export { Input };