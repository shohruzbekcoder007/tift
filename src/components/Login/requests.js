import axios, { headerConfig } from '../../utils/baseUrl'

export const getToken = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)

    });
}

export const getRole = (url, successfulFunction, errorFunction) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}