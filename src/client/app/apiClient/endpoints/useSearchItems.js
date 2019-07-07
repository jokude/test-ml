import useAxios from 'axios-hooks'

const ENDPOINT_PATH = "items";

export const useSearchItems = search => useAxios({
  url: ENDPOINT_PATH,
  method: 'GET',
  params: {
    search
  }
});
