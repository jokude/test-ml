const axios = require('axios');
const endpoints = require('../apiClient/endpoints');
const responseBuilder = require('./responseBuilder');

const CATEGORY_FILTER_ID = "category";

const getMostResultsCategory = async baseData => {
  const filters = baseData.filters.length > 0 ? baseData.filters : baseData.available_filters;
  const categories = filters.find(filter => filter.id == CATEGORY_FILTER_ID);
  const categoryId = categories && categories.values.length > 0 ? categories.values[0].id : null;
  if(!categoryId){
    return [];
  }
  const category = await endpoints.getCategory(categoryId);
  return responseBuilder.getCategoryPath(category.data);
}

const buildResponse = async (baseResults, currencies) => ({
  ...responseBuilder.getAuthor(),
  items: baseResults.results.map(result => ({
    ...responseBuilder.buildBaseItem(result, currencies),
    location: result.seller_address.state.name
  })),
  categories: await getMostResultsCategory(baseResults)
});

const getItems = async search => axios.all([
  endpoints.getCurrencies().then(response => response.data),
  endpoints.searchItems(search).then(response => response.data)
]);

const itemsRoute = async (req, res) => {
  const search = req.query.search;
  try {
    const [currencies, items] = await getItems(search);
    const response = await buildResponse(items, currencies);
    return res.json(response);
  } catch (error) {
    res.status(500).send({ error : error.message });
  }
};

module.exports = itemsRoute;