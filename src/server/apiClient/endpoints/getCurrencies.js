const apiClient = require('../client');
const ENDPOINT_PATH = 'currencies';

const getCurrencies = () =>
  apiClient.get(ENDPOINT_PATH);

module.exports = getCurrencies;