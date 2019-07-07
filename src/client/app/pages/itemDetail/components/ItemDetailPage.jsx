import React from "react";
import PropTypes from "prop-types";
import { useGetItem } from "../../../apiClient/endpoints/useGetItem";
import { Item } from "./Item";
import { Breadcrumbs } from "../../common/Breadcrumbs";

const ItemDetailPage = ({ match }) => {
  const itemId = match.params.id;
  const [{ data, loading, error }] = useGetItem(itemId);

  if(loading || error){
    return null;
  }

  return (
    <main>
      <Breadcrumbs items={data.categories} />
      <Item item={data.item} />
    </main>
  );
};

ItemDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export { ItemDetailPage };