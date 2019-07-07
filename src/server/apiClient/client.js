const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://api.mercadolibre.com/'
});

module.exports = apiClient;