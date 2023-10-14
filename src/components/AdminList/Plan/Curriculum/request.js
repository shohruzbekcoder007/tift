import axios, { headerConfig } from '../../../../utils/baseUrl'
import { AES, enc } from 'crypto-js';

export const getAcademic_Plan = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then((response) => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}

// export const getRegionListRequest = (url, successfulFunction, errorFunction) => {
//     axios.get(url, {
//         headers: headerConfig(),
//     }).then((response) => {
//         successfulFunction(response)
//     }).catch((error) => {
//         errorFunction(error)
//     })
// }

export const editAcademic_Plan = (url, data, successfulFunction, errorFunction) => {
    const bytes = AES.decrypt(sessionStorage.getItem("access_token"), '@q1y1npar0l@');
  const decrypted = bytes.toString(enc.Utf8);
    axios.patch(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${decrypted}`,
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


export const deletAcademic_Plan = (url, successfulFunction, errorFunction) => {
    const bytes = AES.decrypt(sessionStorage.getItem("access_token"), '@q1y1npar0l@');
  const decrypted = bytes.toString(enc.Utf8);
    axios.delete(
        url,
        {
            headers: {
                Authorization: `Bearer ${decrypted}`,
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

export const addAcademic_Plan = (url, data, successfulFunction, errorFunction) => {
    const bytes = AES.decrypt(sessionStorage.getItem("access_token"), '@q1y1npar0l@');
  const decrypted = bytes.toString(enc.Utf8);
    axios.post(
        url,
        data,
        {
            headers: {
                Authorization: `Bearer ${decrypted}`,
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