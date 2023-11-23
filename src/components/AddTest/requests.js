import axios, { headerConfig } from '../../utils/baseUrl'
import { AES, enc } from 'crypto-js';

export const getTeacheravTasks = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response)
    }).catch((error) => {
        errorFunction(error)
    })
}


export const setTeacheravTasksPost = (url, data, successfulFunction, errorFunction) => {
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


export const setTeacheravTasksPut = (url, data, successfulFunction, errorFunction) => {
    const bytes = AES.decrypt(sessionStorage.getItem("access_token"), '@q1y1npar0l@');
    const decrypted = bytes.toString(enc.Utf8);
    axios.put(
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



export const setTeacherDeleteTasks = (url, successfulFunction, errorFunction) => {
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


export const getTestPreview = (url, data, successfulFunction, errorFunction) => {
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