import Axios from "axios";
import { configure } from 'axios-hooks'

export const axiosInstance = Axios.create({
  baseURL: 'http://localhost:3000/api'
});

configure({ axios: axiosInstance });