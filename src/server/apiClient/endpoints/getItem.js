const apiClient = require('../client');

const ENDPOINT_PATH = 'items';

const getItem = itemId =>
  apiClient.get(`${ENDPOINT_PATH}/${itemId}`);

module.exports = getItem;
