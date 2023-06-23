import axios from "axios";
import { host } from "./API_urls"

const instance = axios.create({
  baseURL: host + '/v1/',
});

export default instance;