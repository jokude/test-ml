const apiClient = require('../client');

const ENDPOINT_PATH = 'sites/MLA/search';
const MAX_RESULTS = 4;

const searchItems = query =>
  apiClient.get(ENDPOINT_PATH, {
    params: {
      q: query,
      limit: MAX_RESULTS
    }
  });

module.exports = searchItems;