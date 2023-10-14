import axios, { headerConfig } from '../../utils/baseUrl'
import { AES, enc } from 'crypto-js';

export const getStudentInformation = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

export const setInformation = (url, data, successfulFunction, errorFunction) => {
    const bytes = AES.decrypt(sessionStorage.getItem("access_token"), '@q1y1npar0l@');
  const decrypted = bytes.toString(enc.Utf8);
    axios.put(
        url,
        data,
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