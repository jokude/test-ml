import useAxios from 'axios-hooks'

const ENDPOINT_PATH = "items/";

export const useGetItem = id => useAxios({
  url: `${ENDPOINT_PATH}${id}`,
  method: 'GET'
});
