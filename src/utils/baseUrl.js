import axios from "axios"
import { host } from "./API_urls"
import { AES, enc } from 'crypto-js';

const instance = axios.create({
  baseURL: host + '/api/v1/',
});

export const  headerConfig = () => {
  const bytes = AES.decrypt(sessionStorage.getItem("access_token") || "", '@q1y1npar0l@');
  const decrypted = bytes.toString(enc.Utf8);
  return {
    Authorization: `Bearer ${decrypted}`,
    "Content-Type": "application/json",
  }
}

export default instance;