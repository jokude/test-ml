const findCurrencyById = (currencyId, currencies) => {
  const currency = currencies.find(currency => currency.id == currencyId);
  return {
    currency: currency.symbol,
    decimals: currency.decimal_places
  };
}

const getCategoryPath = (category) =>
  category.path_from_root.map(item => item.name);

const getAuthor = () => ({
  author: {
    name: "Richard",
    lastname: "Hidalgo"
  }
});

const buildBaseItem = (item, currencies) => ({
  id: item.id,
  title: item.title,
  price: {
    amount: item.price,
    ...findCurrencyById(item.currency_id, currencies)
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping
});

module.exports = {
  getAuthor,
  getCategoryPath,
  buildBaseItem
};