const axios = require('axios');
const endpoints = require('../apiClient/endpoints');
const responseBuilder = require('./responseBuilder');

const getItemCategory = async item => {
  const categoryId = item.category_id;
  const category = await endpoints.getCategory(categoryId);
  return responseBuilder.getCategoryPath(category.data);
}

const buildResponse = (item, itemDescription, currencies, categories) => ({
  ...responseBuilder.getAuthor(),
  item: {
    ...responseBuilder.buildBaseItem(item, currencies),
    sold_quantity: item.sold_quantity,
    description: itemDescription.plain_text
  },
  categories
});

const getItem = async itemId =>
  axios.all([
    endpoints.getCurrencies(),
    endpoints.getItemDescription(itemId),
    endpoints.getItem(itemId)
      .then(async ({ data }) => ({
        item: data,
        categories: await getItemCategory(data)
      }))
  ]);

const itemRoute = async (req, res) => {
  const itemId = req.params.id;
  try {
    const [currencies, itemDescription, { item, categories }] = await getItem(itemId);
    return res.json(buildResponse(item, itemDescription.data, currencies.data, categories));
  } catch (error) {
    res.status(500).send({ error : error.message });
  }
};

module.exports = itemRoute;
