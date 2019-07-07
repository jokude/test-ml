import React from "react";
import PropTypes from "prop-types";
import { useSearchItems } from "../../../apiClient/endpoints/useSearchItems";
import { ItemList } from "./ItemList";
import { Breadcrumbs } from "../../common/Breadcrumbs";

const ItemListPage = ({ location }) => {
  const searchParam = new URLSearchParams(location.search);
  const [{ data, loading, error }] = useSearchItems(searchParam.get("search"));

  if(loading || error){
    return null;
  }

  return (
    <main>
      <Breadcrumbs items={data.categories} />
      <ItemList items={data.items} />
    </main>
  );
};

ItemListPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  })
}

export { ItemListPage };