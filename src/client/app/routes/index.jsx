import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { SearchItemPage } from "../pages/searchItem";
import { ItemListPage } from "../pages/itemList";
import { ItemDetailPage } from "../pages/itemDetail";

export const Routes = () => (
  <BrowserRouter basename="/">
    <Route path="/" component={SearchItemPage} />
    <Switch>
      <Route key="detail" path="/items/:id" component={ItemDetailPage} />
      <Route key="list" path="/items" exact={true} component={ItemListPage} />
    </Switch>
  </BrowserRouter>
);
