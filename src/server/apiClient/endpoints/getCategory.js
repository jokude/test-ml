const apiClient = require('../client');
const ENDPOINT_PATH = 'categories/';

const getCategory = categoryId =>
  apiClient.get(`${ENDPOINT_PATH}${categoryId}`);

module.exports = getCategory;