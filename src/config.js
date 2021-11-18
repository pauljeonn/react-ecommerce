import axios from "axios";

export const axiosInstance = axios.create({
  baseURL = 'https://pauljeonn-ecommerce.herokuapp.com/api'
})