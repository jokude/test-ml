import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { Input } from "./Input";

const SearchItemPage = ({ location }) => {
  const searchParam = new URLSearchParams(location.search);
  return (
    <Header>
      <Logo />
      <Input value={searchParam.get("search") || ''} />
    </Header>
  );
}

SearchItemPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  })
}

export { SearchItemPage };
