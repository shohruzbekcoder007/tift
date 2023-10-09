import axios, { headerConfig } from '../../../utils/baseUrl'
import { AES, enc } from 'crypto-js';

export const getAdminKafedra = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}



export const setAdminUploadScience = (url,data, successfulFunction, errorFunction) => {
    
    axios.post(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
                "Content-Type": "multipart/form-data",
              },
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}



export const setAdminDeleteScience = (url, successfulFunction, errorFunction) => {
    const bytes = AES.decrypt(sessionStorage.getItem("access_token"), '@q1y1npar0l@');
  const decrypted = bytes.toString(enc.Utf8);
    axios.delete(
        url,
        {
            headers: {
                Authorization: `Bearer ${decrypted}`,
              },
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}